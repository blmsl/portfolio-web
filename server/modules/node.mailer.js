'use strict'
let nodeMailer = require('nodemailer')

const GMAIL_SENDER_EMAIL = process.env.GMAIL_SENDER_EMAIL
const GMAIL_APP_EMAIL = process.env.GMAIL_APP_EMAIL
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD

/**
 * {Object} message
 * {string} message.from
 * {string} message.to
 * {string} message.subject
 * {string} message.html
 * {Function} [callback] optional callback returns true for a successful send, else false
 */
let send = (message, callback) => {
  let transporter = nodeMailer.createTransport({
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
      console.log('Message not sent: ' + error)
      callback(false)
    }
    console.log('Message sent: ' + info.response)
    callback(true)
  })
}

module.exports.send = send
