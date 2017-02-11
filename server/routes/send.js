const mailHelper = require('./../modules/mail.helper.js')
const nodeMailer = require('./../modules/node.mailer.js')

/**
 * Validates user submission and sends the message received via the contact from
 * @param {Object} req.body
 * @param {string} req.body.name
 * @param {string} req.body.email
 * @param {string} req.body.text
 * @param {string} req.body.heuning
 */
module.exports = (req, res) => {
  const submission = req.body
  const errors = mailHelper.validate(submission)

  if (errors.length > 0) {
    res.status(400).json({errors: errors})
  } else {
    const message = mailHelper.buildMessage(submission)
    const messageCopy = mailHelper.buildMessageCopy(submission)

    nodeMailer.send(message, (success) => {
      if (success) {
        nodeMailer.send(messageCopy, (success) => {
          if (success) {
            res.status(200).json('Sent successfully')
          } else {
            res.sendStatus(500)
          }
        })
      } else {
        res.sendStatus(500)
      }
    })
  }
}
