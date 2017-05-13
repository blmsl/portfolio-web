const express = require('express')
const cache = require('express-cache-headers')
const middleware = require('./middleware')
const routes = require('./routes')
const envConfig = require('./config/env.config')
const instagramImages = require('./modules/instagram.images')
const expressStaticMappings = require('./config/express.props.json').static
const expressRedirectMappings = require('./config/express.props.json').redirects
const port = envConfig.get('PORT')
const preRenderToken = envConfig.get('PRE_RENDER_TOKEN')
const instagramImageIds = envConfig.get('INSTAGRAM_IMAGE_IDS').split(',')
const app = express()

app.use(require('compression')())
app.use(require('netjet')({cache: {max: 100}}))
app.use(require('helmet')())
app.use(require('helmet-csp')({
  directives: {
    defaultSrc: ['\'self\''],
    frameSrc: ['\'self\'', 'https://www.youtube.com'],
    fontSrc: ['\'self\'', 'data:', 'https://fonts.gstatic.com', 'https://maxcdn.bootstrapcdn.com'],
    imgSrc: ['\'self\'', 'data:', 'https://maps.googleapis.com', 'https://csi.gstatic.com', 'https://maps.gstatic.com', 'https://www.google-analytics.com', 'https://david-dm.org', 'https://cdn.rawgit.com'],
    objectSrc: ['\'none\''],
    scriptSrc: ['\'self\'', 'https://maps.googleapis.com', 'https://www.google-analytics.com'],
    styleSrc: ['\'self\'', '\'unsafe-inline\'', 'https://fonts.googleapis.com', 'https://maxcdn.bootstrapcdn.com']
  },
  browserSniff: false
}))
app.use(require('hsts')({
  maxAge: 5184000 // sixty days in seconds
}))
app.use(require('referrer-policy')({
  policy: 'no-referrer-when-downgrade'
}))
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
app.get('/codeschool', cache({nocache: true}), routes.codeschool)
app.get('/', cache({nocache: true}), routes.html)
app.get('/*', cache({ttl: 5184000}), routes.fourohfour)

instagramImages.fetchInstaImages(instagramImageIds)
  .then((result) => {
    console.log(result)
    app.listen(port, () => {
      console.info(`listening on port ${port}`)
    })
  })
  .catch(err => {
    console.error(err)
    app.listen(port, () => {
      console.info(`listening on port ${port}`)
    })
  })
