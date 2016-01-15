'use strict'
let randomImages = require('./../modules/random.images.js')

module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-cache')
  res.json({imageIds: randomImages.getIds()})
}
