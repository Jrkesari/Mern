const Category = require('../models/Category');

exports.addCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const newCategory = new Category({ name });
        await newCategory.save();
        res.status(201).json({ message: 'Category added successfully', category: newCategory });
    } catch (error) {
        console.error('Error adding category:', error);
        res.status(500).json({ message: 'Error adding category' });
    }
};

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Error fetching categories' });
    }
};
