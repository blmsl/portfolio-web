const fetch = require('node-fetch')
const codeschoolCache = require('./../modules/codeschool.cache')
const codeschoolImages = require('./../modules/codeschool.images')

const fetchFeed = () => codeschoolCache.wrap('codeschool.feed', () => {
  return new Promise((resolve, reject) => {
    fetch('https://www.codeschool.com/users/ouq77.json')
      .then(res => res.json())
      .then(json => resolve(codeschoolImages.resizeReplace(json)))
      .catch(errors => reject(errors))
  })
})

module.exports.fetchFeed = fetchFeed
