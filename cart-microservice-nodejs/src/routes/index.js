const express = require('express')
const router = express.Router();

const CartRoute = require('./cart/cart');

router.use(CartRoute)

module.exports = router