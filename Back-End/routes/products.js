const express = require('express');
const router = express.Router();
const passport = require('passport');
const productController = require('../controllers/ProductController');

// Fetch all products
router.get('/', productController.fetchProducts);

// Fetch product by id
router.get('/:id', (req, res, next) => {
    
})

// Create one product
router.post('/create', productController.createProduct);

// Update one product by id
router.put('/update', (req, res, next) => {

});

module.exports = router;