'use strict';
let requireDirectory = require('require-directory')
let camelCase = require('camelcase')

module.exports = requireDirectory(module, {
  rename: function (n) {
    return camelCase(n)
  }
})

