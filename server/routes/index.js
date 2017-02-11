const requireDirectory = require('require-directory')
const camelCase = require('camelcase')

module.exports = requireDirectory(module, {
  rename: function (n) {
    return camelCase(n)
  }
})

