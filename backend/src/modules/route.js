'use strict';
const { Router } = require('express');
const adminRoute = require('./admin/adminRouter');
const productRoute = require('./product/productRouter');
const router = Router();

const init = () => {
  // router.use('/admin', adminRoute);
  // router.use('/product', productRoute);
  return router;
};

module.exports = {init};
