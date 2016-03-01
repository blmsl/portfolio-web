'use strict'
let express = require('express')
let middleware = require('./middleware')
let routes = require('./routes')
let expressStaticMappings = require('./config/express.props.json').static
let expressRedirectMappings = require('./config/express.props.json').redirects
let port = process.env.PORT || 9000
let app = express()

app.use(require('compression')())
app.use(require('body-parser').json())
app.use(middleware.heroku.exclude)

expressStaticMappings.forEach((mapping) => {
  console.log('mapping resource "' + mapping.uri + '" to static location "' + mapping.location + '" with cache "' + mapping.cache + '"')
  app.use(mapping.uri, express.static(mapping.location, {maxAge: mapping.cache}))
})

expressRedirectMappings.forEach((mapping) => {
  console.log('redirecting resource "' + mapping.uri + '" to new location "' + mapping.newUri + '"')
  app.get(mapping.uri, (req, res) => {
    res.redirect(301, mapping.newUri)
  })
})

app.get('/imageids', routes.imageids)
app.get('/lastmodified', routes.lastmodified)
app.get('/errorconfig', routes.errorconfig)
app.post('/send', routes.send)
app.get('/exclude', routes.exclude)
app.get('/', routes.html)
app.get('/*', routes.fourohfour)

app.listen(port, () => {
  console.log('Listening on port ' + port)
})
