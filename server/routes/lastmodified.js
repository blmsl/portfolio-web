'use strict'
let lastModified = require('./../config/last.mod.props.json')

module.exports = (req, res) => {
  res.json(lastModified)
}
