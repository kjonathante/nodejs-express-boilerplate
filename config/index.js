require('dotenv').config()
const bunyan = require('bunyan')
const appName = 'App-Name'
const log = {
  development: () => bunyan.createLogger({ name: appName, level: 'debug' }),
  production: () => bunyan.createLogger({ name: appName, level: 'info' }),
  test: () => bunyan.createLogger({ name: appName, level: 'fatal' })
}

module.exports = {
  privateKey: process.env.PRIVATE_KEY,
  log: (env = process.env.NODE_ENV || 'development') => {
    return log[env]()
  }
}
