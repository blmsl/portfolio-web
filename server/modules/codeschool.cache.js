const cacheManager = require('cache-manager')

module.exports = cacheManager.caching({
  store: 'memory',
  ttl: 86400,
  promiseDependency: Promise
})
