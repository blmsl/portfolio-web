'use strict'
let express = require('express')
let cache = require('express-cache-headers')
let middleware = require('./middleware')
let routes = require('./routes')
let expressStaticMappings = require('./config/express.props.json').static
let expressRedirectMappings = require('./config/express.props.json').redirects
let port = process.env.PORT || 9000
let preRenderToken = process.env.PRE_RENDER_TOKEN
let app = express()

app.use(require('compression')())
app.use(require('body-parser').json())
app.use(require('prerender-node').set('prerenderToken', preRenderToken))
app.use(middleware.heroku.exclude)

expressStaticMappings.forEach((mapping) => {
  console.info(`mapping resource "${mapping.uri}" to static location "${mapping.location}" with cache "${mapping.cache}"`)
  app.use(mapping.uri, express.static(mapping.location, {maxAge: mapping.cache}))
})

expressRedirectMappings.forEach((mapping) => {
  console.info(`redirecting resource "${mapping.uri}" to new location "${mapping.newUri}"`)
  app.get(mapping.uri, (req, res) => {
    res.redirect(301, mapping.newUri)
  })
})

app.get('/imageids', cache({nocache: true}), routes.imageids)
app.post('/send', cache({nocache: true}), routes.send)
app.get('/exclude', cache({ttl: 5184000}), routes.exclude)
app.get('/', cache({nocache: true}), routes.html)
app.get('/*', cache({ttl: 5184000}), routes.fourohfour)

app.listen(port, () => {
  console.info(`Listening on port ${port}`)
})
