'use strict'
let errorConfig = require('./../config/error.props.json')

module.exports = (req, res) => {
  res.json(errorConfig)
}
