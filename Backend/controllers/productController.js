const Product = require('../models/Product');
const Category = require('../models/Category');

// Add a product
exports.addProduct = async (req, res) => {
    try {
        const { name, price, quantity, description, category } = req.body;

        // Validate category
        if (category) {
            const validCategory = await Category.findById(category);
            if (!validCategory) {
                return res.status(400).json({ message: 'Invalid category ID' });
            }
        }

        const newProduct = new Product({
            name,
            price,
            quantity,
            description,
            category
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Update the price of a product
exports.updatePrice = async (req, res) => {
    try {
        const { productId } = req.params;
        const { price } = req.body;

        // Validate product ID
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Update price
        product.price = price;
        const updatedProduct = await product.save();
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Error updating price:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get sales report (example implementation)
exports.getSalesReport = async (req, res) => {
    try {
        const products = await Product.find(); // You may want to aggregate or filter as needed
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching sales report:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Fetch products by category

// Fetch products by category
exports.getProductsByCategory = async (req, res) => {
    try {
        const { categoryId } = req.query; // Assuming you pass categoryId as a query parameter

        if (!categoryId) {
            return res.status(400).json({ message: 'Category ID is required' });
        }

        const products = await Product.find({ category: categoryId });
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found for this category' });
        }

        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products by category:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

