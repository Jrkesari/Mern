const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Ensure this path is correct
const Category = require('../models/Category');
const productController = require('../controllers/productController');

// Add a product
router.post('/products/add', productController.addProduct);

// Update the price of a product
router.put('/products/update-price/:productId', productController.updatePrice);

// Get sales report
router.get('/products/sales-report', productController.getSalesReport);

// Get products
router.get('/products', async (req, res) => {
    try {
        const { category } = req.query;
        const query = category ? { category } : {};

        const products = await Product.find(query); // Ensure Product is correctly defined and imported
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
