'use strict';
const { Router } = require('express');
const adminRouter = require('./admin/adminRouter');
const productRouter = require('./product/productRouter');
const router = Router();

const init = () => {
  router.use('/admin', adminRouter);
  router.use('/product', productRouter);
  return router;
};

module.exports = {init};
