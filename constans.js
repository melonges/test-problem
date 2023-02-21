require('dotenv').config()

module.exports.config = {
  dbConfig: {
    host: '****',
    user: ' **** ',
    database: '**** ',
    password: '**** ',
  },
  port: process.env.PORT || 3000,
  app: {
    pageLimit: 10,
  }
}
