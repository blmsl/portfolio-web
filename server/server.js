'use strict';
let express = require('express'),
  compression = require('compression'),
  bodyParser = require('body-parser'),
  path = require('path'),
  randomImages = require('./modules/random.images.js'),
  mailHelper = require('./modules/mail.helper.js'),
  nodeMailer = require('./modules/node.mailer.js'),
  expressStaticMappings = require('./config/express.static.props.json').mappings,
  lastModified = require('./config/last.mod.props.json').last_modified,
  errorMessages = require('./config/error.props.json'),
  port = process.env.PORT || 9000,
  app = express();

app.use(compression());
app.use(bodyParser.json());

app.use((req, res, next) => {
  if (req.hostname.indexOf('.herokuapp.com') > -1) {
    res.header('X-Robots-Tag', 'noindex, nofollow');
  }
  next();
});

expressStaticMappings.forEach((mapping) => {
  console.log('mapping resource "' + mapping.uri + '" to static location "' + mapping.location + '" with cache "' + mapping.cache + '"')
  app.use(mapping.uri, express.static(mapping.location, {maxAge: mapping.cache}));
});

app.get('/imageids', (req, res) => {
  res.json({imageIds: randomImages.getIds()});
});

app.get('/lastmodified', (req, res) => {
  res.send(lastModified);
});

app.get('/errorconfig', (req, res) => {
  res.json({errorMessages: errorMessages});
});

/**
 * Validates user submission and sends the message received via the contact from
 *
 * @param {Object} submission
 * @param {string} submission.name
 * @param {string} submission.email
 * @param {string} submission.text
 * @param {string} submission.heuning
 */
app.post('/send', (req, res) => {
  let submission = req.body,
    response = mailHelper.validate(submission);

  if (response.length > 0) {
    res.status(400).send({"errors": response});
  } else {

    let message = mailHelper.buildMessage(submission),
      messageCopy = mailHelper.buildMessageCopy(submission);

    nodeMailer.send(message, (success) => {
      if (success) {
        nodeMailer.send(messageCopy, (success) => {
          if (success) {
            res.send('OK');
          } else {
            res.status(500).send({"errors": ["e_generic"]});
          }
        });
      } else {
        res.status(500).send({"errors": ["e_generic"]});
      }
    });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../app/index.html'));
});

app.get('/exclude', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../app/exclude.html'));
});

app.get('/*', (req, res) => {
  console.log('No resource matches: ' + req.url);
  res.sendFile(path.resolve(__dirname, '../app/404.html'));
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
