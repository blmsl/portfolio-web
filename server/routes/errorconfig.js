'use strict';
let errorMessages = require('./../config/error.props.json')

module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-cache')
  res.json({errorMessages: errorMessages})
}
