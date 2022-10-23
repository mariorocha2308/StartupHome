'use strict';
const router = require('express').Router();
const { getProducts, createProduct, updateProduct, deleteProduct, findProducts } = require("./productService");

router.get('/all', getProducts);
router.get('/search', findProducts);
router.post('/create', createProduct);
router.put('/update', updateProduct);
router.delete('/delete', deleteProduct);

module.exports = router;
