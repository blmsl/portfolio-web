const fetch = require('node-fetch')
const fs = require('fs')

const persist = (imageUrl, targetPath) => new Promise((resolve, reject) => {
  fetch(imageUrl)
    .then(res => res.buffer())
    .then(buffer => {
      fs.writeFile(targetPath, buffer, 'binary', (err) => {
        if (err) {
          reject(err)
        }
        resolve()
      })
    }).catch(err => reject(err))
})

module.exports = {
  persist
}
