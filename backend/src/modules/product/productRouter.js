'use strict';
const router = require('express').Router();
const { getProduct } = require("./productService");

router.get('/all', getProduct);

module.exports = router;
