const path = require('path')
const imageResizeHelper = require('./image.resize.helper')
const imagePathHelper = require('./image.path.helper')

const relativeImagePath = 'assets/images/codeschool'
const imageBasePath = path.resolve(__dirname, `../../app/${relativeImagePath}`)

const processBadge = (course, imagePromises) => {
  const imageName = imagePathHelper.getImageName(course.badge)
  const absoluteImageResizedPath = imagePathHelper.getAbsoluteImageResizedPath(imageBasePath, imageName)
  if (!imagePathHelper.isResizedImageExists(absoluteImageResizedPath)) {
    imagePromises.push(imageResizeHelper.resize(course.badge, imageBasePath))
  }
  course.badge = imagePathHelper.getRelativeImageResizedPath(relativeImagePath, imageName)
}

const resizeReplace = jsonResponse => {
  const imagePromises = []
  jsonResponse.courses.completed.forEach(course => {
    processBadge(course, imagePromises)
  })
  jsonResponse.courses.in_progress.forEach(course => {
    processBadge(course, imagePromises)
  })

  return Promise.all(imagePromises)
    .then(() => jsonResponse)
    .catch(e => e)
}

module.exports.resizeReplace = resizeReplace
