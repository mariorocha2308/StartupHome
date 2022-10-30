'use strict';
const router = require('express').Router();
const { getProducts, createProduct, updateProduct, deleteProduct, searchProducts, findProductById } = require("./productService");

router.get('/all', getProducts);
router.get('/search', searchProducts);
router.get('/find', findProductById);
router.post('/create', createProduct);
router.put('/update', updateProduct);
router.delete('/delete', deleteProduct);

module.exports = router;
