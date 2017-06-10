const envConfig = require('./../config/env.config').get()

const imageIds = envConfig.INSTAGRAM_IMAGE_IDS.split(',')

const getIds = () => {
  const reducedImageIds = []
  const imageIdsCopy = imageIds.slice(0)

  if (imageIds.length > 200) {
    while (reducedImageIds.length < 200) {
      reducedImageIds.push(imageIdsCopy.splice(Math.floor(Math.random() * (imageIdsCopy.length)), 1)[0])
    }
  } else {
    console.error(`Not enough image ids: ${imageIds.length}`)
  }
  return reducedImageIds
}

module.exports.getIds = getIds
