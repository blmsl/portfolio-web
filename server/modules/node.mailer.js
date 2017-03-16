const nodeMailer = require('nodemailer')
const envConfig = require('./../config/env.config')

const GMAIL_SENDER_EMAIL = envConfig.get('GMAIL_SENDER_EMAIL')
const GMAIL_APP_EMAIL = envConfig.get('GMAIL_APP_EMAIL')
const GMAIL_APP_PASSWORD = envConfig.get('GMAIL_APP_PASSWORD')

/**
 * {Object} message
 * {string} message.from
 * {string} message.to
 * {string} message.subject
 * {string} message.html
 * {Function} [callback] optional callback returns true for a successful send, else false
 */
const send = (message, callback) => {
  const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_APP_EMAIL,
      pass: GMAIL_APP_PASSWORD
    }
  }, {
    from: GMAIL_SENDER_EMAIL
  })
  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.error(`Message not sent: ${error}`)
      callback(false)
    }
    console.error(`Message sent: ${JSON.stringify(info)}`)
    callback(true)
  })
}

module.exports.send = send
