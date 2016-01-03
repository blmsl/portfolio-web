'use strict';
let nodeMailer = require('nodemailer');

const
    GMAIL_SENDER_EMAIL = process.env.GMAIL_SENDER_EMAIL || 'Louw Swart <louw@ouq77.kiwi>',
    GMAIL_APP_EMAIL = process.env.GMAIL_APP_EMAIL || 'louw@ouq77.kiwi',
    GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || 'cenicbkuzpkfhqqx';

/**
 * {Object} message
 * {string} message.from
 * {string} message.to
 * {string} message.subject
 * {string} message.html
 * {Function} [callback] optional callback returns true for a successful send, else false
 *
 * @returns {boolean} true for successful send, or false if an error occurred
 */
var send = (message, callback) => {
  let transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_APP_EMAIL,
      pass: GMAIL_APP_PASSWORD
    }
  }, {
    from: GMAIL_SENDER_EMAIL
  });
  return transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log('Message not sent: ' + error);
      callback(false);
    }
    console.log('Message sent: ' + info.response);
    callback(true);
  });
}

module.exports.send = send;