'use strict';
let express = require('express'),
    ejs = require('ejs'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    randomImages = require('./modules/random.images.js'),
    mailHelper = require('./modules/mail.helper.js'),
    nodeMailer = require('./modules/node.mailer.js'),
    app = express(),
    port = process.env.PORT || 9000,
    properties = require('./config/site.props.json'),
    expressStaticMappings = require('./config/express.static.props.json').mappings,
    lastModified = require('./config/last.mod.props.json').last_modified,
    errorMessages = require('./config/error.props.json');

app.use(compression());
app.use(bodyParser.json());

expressStaticMappings.forEach((mapping) => {
  console.log('mapping resource "' + mapping.uri + '" to static location "' + mapping.location + '" with cache "' + mapping.cache + '"')
  app.use(mapping.uri, express.static(mapping.location, {maxAge: mapping.cache}));
});

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + './../app/views');

app.use((req, res, next) => {
  if (req.hostname.indexOf('.herokuapp.com') > -1) {
    res.header('X-Robots-Tag', 'noindex, nofollow');
  }
  if (req.url === '/') {
    res.render('index', {props: properties});
  } else if (req.url === '/exclude.html') {
    res.render('exclude');
  } else {
    next();
  }
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

app.get('/*', (req, res) => {
  console.log('No resource matches: ' + req.url);
  res.redirect('/#/404');
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
