const https = require('https')
const codeschoolCache = require('./../modules/codeschool.cache')
const codeschoolImages = require('./../modules/codeschool.images')

const options = {
  host: 'www.codeschool.com',
  path: '/users/ouq77.json',
  port: 443,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

const fetch = () => codeschoolCache.wrap('codeschool.feed', () => {
  return new Promise((resolve, reject) => {
    https.get(options, (res) => {
      let body = ''
      res.setEncoding('utf8')
      res.on('data', (chunk) => {
        body += chunk
      })
      res.on('end', () => {
        resolve(codeschoolImages.resizeReplace(JSON.parse(body)))
      })
    }).on('error', errors => {
      reject(errors)
    })
  })
})

module.exports.fetch = fetch
