const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.post('/categories/add', categoryController.addCategory);
router.get('/categories', categoryController.getCategories);

module.exports = router;
