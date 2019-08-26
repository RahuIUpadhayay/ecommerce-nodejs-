const path = require('path');

const express = require('express');


const router = express.Router();
const productcontrollers = require('../controllers/products');

// /admin/add-product => GET
router.get('/add-product', productcontrollers.getAddproduct); 

// /admin/add-product => POST
router.post('/add-product',productcontrollers.postAddProduct);
module.exports = router;

