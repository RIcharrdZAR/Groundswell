// ============================================================================
// Environment Configuration
// ============================================================================
// Load environment variables from .env file into process.env
require('dotenv').config();

// ============================================================================
// Dependencies
// ============================================================================
// Express: Web framework for building REST APIs
const express = require('express');
// Mongoose: MongoDB object modeling tool for Node.js
const mongoose = require('mongoose');
// CORS: Cross-Origin Resource Sharing middleware to allow frontend requests
const cors = require('cors');

// ============================================================================
// Application Setup
// ============================================================================
// Initialize Express application instance
const app = express();

// ============================================================================
// Middleware Configuration
// ============================================================================
// Enable CORS to allow requests from the React frontend (port 5173)
app.use(cors());
// Parse incoming JSON request bodies and make available on req.body
app.use(express.json());

// ============================================================================
// Database Connection
// ============================================================================
// Connect to local MongoDB instance using the groundswell database
// Connection string: mongodb://127.0.0.1:27017/groundswell
mongoose.connect('mongodb://127.0.0.1:27017/groundswell')
  // Log success message when connection is established
  .then(() => console.log('✅ Connected to MongoDB'))
  // Log error message if connection fails
  .catch(err => console.error('MongoDB connection error:', err));

// ============================================================================
// Routes / API Endpoints
// ============================================================================
// Health check endpoint - responds with a simple message to verify API is running
app.get('/', (req, res) => {
  res.send('Howzit from Groundswell');
});

// ============================================================================
// Server Startup
// ============================================================================
// Define the port number for the API server (convention: 4000)
const PORT = 4000;
// Start the Express server and listen for incoming HTTP requests
app.listen(PORT, () => {
  // Log server startup message with the URL
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

