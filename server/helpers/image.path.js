const fs = require('fs')

const getImageName = imageUrl =>
  imageUrl.substr(imageUrl.lastIndexOf('/') + 1)

const getResizedImageName = (imageName, width = 95, height = 95) =>
  `${imageName.substr(0, imageName.lastIndexOf('.'))}.${width}x${height}${imageName.substr(imageName.lastIndexOf('.'))}`

const getAbsoluteImagePath = (imageBasePath, imageName) =>
  `${imageBasePath}/${imageName}`

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
  getResizedImageName,
  getAbsoluteImagePath,
  getAbsoluteImageOriginalPath,
  getAbsoluteImageResizedPath,
  getRelativeImageResizedPath,
  isResizedImageExists
}
