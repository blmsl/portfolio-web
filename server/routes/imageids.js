'use strict'
let randomImages = require('./../modules/random.images.js')

module.exports = (req, res) => {
  res.json({imageIds: randomImages.getIds()})
}
