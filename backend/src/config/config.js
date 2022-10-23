const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  SERVER_PORT: process.env.PORT || '',
  NODE_ENV: process.env.NODE_ENV || '',
  DB_NAME: process.env.DB_NAME || '',
  DB_ATLAS_URI: process.env.DB_ATLAS_URI || '',
};
