require('dotenv').config();

module.exports = {
  nodeEnv: process.env.NODE_ENV,
  serverPort: process.env.SERVER_PORT,
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    post: process.env.DB_PORT,
  }
}