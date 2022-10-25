const mongoose = require('mongoose');
const config = require('../config/config')
const { Product } = require('./Product');

const connectDb = () => {
  return mongoose.connect(`mongodb://${config.MONGOUSER}:${config.MONGOPASSWORD}@${config.MONGOHOST}:${config.MONGOPORT}`);
};

const models = { Product };

module.exports = { connectDb, models };
