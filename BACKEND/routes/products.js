const express = require('express');
const { getProducts, getSingleproducts } = require('../controllers/productControllers');
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleproducts);

module.exports = router;
