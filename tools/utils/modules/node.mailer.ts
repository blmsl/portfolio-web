'use strict';
import {Message} from './../definitions/message';
import {Callback} from './../definitions/callback';
import * as nodeMailer from 'nodemailer';

const
  GMAIL_SENDER_EMAIL = process.env.GMAIL_SENDER_EMAIL,
  GMAIL_APP_EMAIL = process.env.GMAIL_APP_EMAIL,
  GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

/**
 * {Object} message
 * {string} [message.replyTo]
 * {string} message.to
 * {string} message.subject
 * {string} message.html
 * {Function} [callback] optional callback returns true for a successful send, else false
 *
 * @returns {boolean} true for successful send, or false if an error occurred
 */
let send = (message:Message, callback:Callback):void => {
  let transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_APP_EMAIL,
      pass: GMAIL_APP_PASSWORD
    }
  }, {
    from: GMAIL_SENDER_EMAIL
  });
  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log('Message not sent: ' + error);
      callback(false);
    }
    console.log('Message sent: ' + info.response);
    callback(true);
  });
};

export {send};
