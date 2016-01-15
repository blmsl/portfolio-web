'use strict';
let mailHelper = require('./../modules/mail.helper.js')
let nodeMailer = require('./../modules/node.mailer.js')

/**
 * Validates user submission and sends the message received via the contact from
 * @param {Object} req.body
 * @param {string} req.body.name
 * @param {string} req.body.email
 * @param {string} req.body.text
 * @param {string} req.body.heuning
 */
module.exports = (req, res) => {
  let submission = req.body
  let response = mailHelper.validate(submission)

  res.setHeader('Cache-Control', 'no-cache')

  if (response.length > 0) {
    res.status(400).json({errors: response})
  } else {
    let message = mailHelper.buildMessage(submission)
    let messageCopy = mailHelper.buildMessageCopy(submission)

    nodeMailer.send(message, (success) => {
      if (success) {
        nodeMailer.send(messageCopy, (success) => {
          if (success) {
            res.send('OK')
          } else {
            res.status(500).json({errors: ['e_generic']})
          }
        })
      } else {
        res.status(500).json({errors: ['e_generic']})
      }
    })
  }
}
