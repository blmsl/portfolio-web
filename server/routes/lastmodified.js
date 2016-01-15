'use strict'
let lastModified = require('./../config/last.mod.props.json').last_modified

module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-cache')
  res.send(lastModified)
}
