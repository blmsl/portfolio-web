const fs = require('fs')
const https = require('https')
const URL = require('url').URL
const sharp = require('sharp')
const imagePathHelper = require('./image.path.helper')

const options = {
  port: 443,
  method: 'GET'
}

const resize = (imageUrl, imageBasePath, contentType = 'image/png', width = 190, height = 190) =>
  new Promise((resolve, reject) => {
    const imageName = imagePathHelper.getImageName(imageUrl)
    const imageOriginalPath = imagePathHelper.getAbsoluteImageOriginalPath(imageBasePath, imageName)
    const imageResizedPath = imagePathHelper.getAbsoluteImageResizedPath(imageBasePath, imageName)
    const url = new URL(imageUrl)
    const imageOptions = Object.assign({}, options, {
      host: url.hostname,
      path: url.pathname,
      headers: {
        'Content-Type': contentType
      }
    })
    https.get(imageOptions, (res) => {
      let body = ''
      res.setEncoding('binary')
      res.on('data', (chunk) => {
        body += chunk
      })
      res.on('end', () => {
        fs.writeFile(imageOriginalPath, body, 'binary', (err) => {
          if (!err) {
            sharp(imageOriginalPath)
              .resize(width, height)
              .toFile(imageResizedPath, (err) => {
                if (err) {
                  reject(err)
                }
                resolve()
              })
          }
        })
      })
    }).on('error', errors => {
      reject(errors)
    })
  })

module.exports.resize = resize
