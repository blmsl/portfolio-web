'use strict'
let path = require('path')

module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-cache')
  res.sendFile(path.resolve(__dirname, '../../app/index.html'))
}
