const mongoose = require('mongoose');
const config = require('../config/config')
const { Product } = require('./Product');

const connectDb = () => {
  return mongoose.connect(config.DB_ATLAS_URI + config.DB_NAME);
};

const models = { Product };

module.exports = { connectDb, models };
