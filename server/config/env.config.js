const fs = require('fs')
const convict = require('convict')

const envConfig = convict({
  PORT: {
    doc: 'The port to bind',
    format: 'port',
    default: 9000,
    env: 'PORT'
  },
  PRE_RENDER_TOKEN: {
    doc: 'The application\'s Pre-render token',
    format: String,
    env: 'PRE_RENDER_TOKEN'
  },
  GMAIL_SENDER_EMAIL: {
    doc: 'The application\'s Sender Email, incl. name',
    format: String,
    env: 'GMAIL_SENDER_EMAIL'
  },
  GMAIL_APP_EMAIL: {
    doc: 'The application\'s Gmail Email account',
    format: 'email',
    env: 'GMAIL_APP_EMAIL'
  },
  GMAIL_APP_PASSWORD: {
    doc: 'The application\'s Gmail Email password',
    format: String,
    env: 'GMAIL_APP_PASSWORD'
  },
  CUSTOM_APP_DOMAIN: {
    doc: 'The application\'s Custom App domain',
    format: 'url',
    env: 'CUSTOM_APP_DOMAIN'
  },
  INSTAGRAM_IMAGE_IDS: {
    doc: 'The application\'s Instagram Image Ids',
    format: String,
    env: 'INSTAGRAM_IMAGE_IDS',
    default: ''
  }
})

const envLocalConfig = './server/config/env.local.json'

if (fs.existsSync(envLocalConfig)) {
  envConfig.loadFile([envLocalConfig])
}

module.exports = envConfig
