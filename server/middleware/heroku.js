module.exports = (req, res, next) => {
  if (req.hostname.indexOf('.herokuapp.com') > -1) {
    res.header('X-Robots-Tag', 'noindex, nofollow')
  }
  next()
}
