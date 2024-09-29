const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust path as necessary

// Registration route
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    // Simple validation
    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ msg: 'Passwords do not match' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user
    const newUser = new User({ username, email, password });

    // Save user to database
    await newUser.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ msg: 'Server error' });
  }
});
router.post('/login', (req, res) => {
    // Your login logic here
    res.send('Login endpoint');
  });
  

module.exports = router;
