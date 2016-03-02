'use strict'
let errorConfig = require('./../config/error.props.json')

module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-cache')
  res.json(errorConfig)
}
