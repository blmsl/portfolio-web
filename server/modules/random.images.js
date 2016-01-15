'use strict'
let imageIds = (process.env.INSTAGRAM_IMAGE_IDS || '').split(',')

let getIds = () => {
  let reducedImageIds = []
  let imageIdsCopy = imageIds.slice(0)

  if (imageIds.length > 64) {
    while (reducedImageIds.length < 65) {
      reducedImageIds.push(imageIdsCopy.splice(Math.floor(Math.random() * (imageIdsCopy.length)), 1)[0])
    }
  }
  return reducedImageIds
}

module.exports.getIds = getIds
