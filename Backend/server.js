require('dotenv').config(); // Add this line at the top of your server.js file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS
const authRoutes = require('./routes/auth'); // Import the auth routes
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');


const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors()); // Use CORS middleware
app.use(bodyParser.json());
app.use(express.json());
app.use('/api', productRoutes);

// Use routes
app.use('/api', authRoutes); // Prefix routes with /api
app.use('/api', categoryRoutes);
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
