import {ErrorMessage} from './../definitions/error.message';

/**
 * Array of Journeys for the Contact section
 * @type {Airport[][]}
 */
export const ERROR_MESSAGES: Array<ErrorMessage> = [
  {
    code: 'e_spam',
    message: 'The spam filter has been triggered',
  },
  {
    code: 'e_name_required',
    message: 'Please enter your name',
  },
  {
    code: 'e_name_disallowed_chars',
    message: 'Name contains one or more illegal characters: <i>< > ^ | " \' % ; ) ( & + -</i>',
  },
  {
    code: 'e_email_required',
    message: 'Please enter your email',
  },
  {
    code: 'e_email_invalid',
    message: 'You have entered an invalid email',
  },
  {
    code: 'e_message_required',
    message: 'Please enter your message',
  },
  {
    code: 'e_message_disallowed_chars',
    message: 'Message contains one or more illegal characters: <i>< > ^ | " \' % ; ) ( & + -</i>',
  },
  {
    code: 'e_contains_url',
    message: 'URLs are not allowed',
  },
  {
    code: 'e_generic',
    message: 'Something unexpected happened - please try again later...',
  },
];
