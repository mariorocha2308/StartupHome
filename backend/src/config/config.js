const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  SERVER_PORT: process.env.PORT || '',
  NODE_ENV: process.env.NODE_ENV || '',
  MONGONAME: process.env.MONGONAME || '',
  MONGOHOST: process.env.MONGOHOST || '',
  MONGOPASSWORD: process.env.MONGOPASSWORD || '',
  MONGOPORT: process.env.MONGOPORT || '',
  MONGOUSER: process.env.MONGOUSER || '',
};
