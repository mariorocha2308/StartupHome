'use strict';
const router = require('express').Router();
const { getProducts, createProduct, updateProduct, deleteProduct, searchProducts, findProductById } = require("./productService");

router.get('/all', getProducts);
router.get('/search', searchProducts);
router.post('/create', createProduct);
router.put('/update', updateProduct);
router.delete('/delete', deleteProduct);
router.get('/find/:idProduct', findProductById);

module.exports = router;
