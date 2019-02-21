const parseInt = require('parse-int');

require('dotenv').config()

module.exports = {
  	consumer_key: process.env.CONSUMER_KEY,
  	consumer_secret: process.env.CONSUMER_SECRET,
  	access_token: process.env.ACCESS_TOKEN,
  	access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  	googleSheetUrl: process.env.GOOGLE_SHEET_URL,
  	headerName: process.env.GOOGLE_SHEET_HEADER
};