const fs = require('fs')

const getImageName = imageUrl =>
  imageUrl.substr(imageUrl.lastIndexOf('/') + 1)

const getAbsoluteImageOriginalPath = (imageBasePath, imageName) =>
  `${imageBasePath}/original/${imageName}`

const getAbsoluteImageResizedPath = (imageBasePath, imageName) =>
  `${imageBasePath}/resized/${imageName}`

const getRelativeImageResizedPath = (relativeImagePath, imageName) =>
  `/${relativeImagePath}/resized/${imageName}`

const isResizedImageExists = resizedImagePath =>
  fs.existsSync(resizedImagePath)

module.exports = {
  getImageName,
  getAbsoluteImageOriginalPath,
  getAbsoluteImageResizedPath,
  getRelativeImageResizedPath,
  isResizedImageExists
}
