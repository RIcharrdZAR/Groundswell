// ============================================================================
// Meter Routes
// ============================================================================
// RESTful API endpoints for managing utility meters

const express = require('express');
const Meter = require('../models/Meter');

// Create Express router instance
const router = express.Router();

// ============================================================================
// GET /api/meters
// ============================================================================
/**
 * List all meters
 * @route GET /api/meters
 * @returns {Array} Array of meter objects
 */
router.get('/', async (req, res) => {
  try {
    // Fetch all meters from database, sorted by kind (electricity, then water)
    const meters = await Meter.find().sort({ kind: 1 });

    // Return meters array with 200 OK status
    res.status(200).json(meters);
  } catch (error) {
    // Log error for debugging
    console.error('Error fetching meters:', error);

    // Return 500 Internal Server Error with error message
    res.status(500).json({
      error: 'Failed to fetch meters',
      message: error.message,
    });
  }
});

// ============================================================================
// GET /api/meters/:id
// ============================================================================
/**
 * Fetch a single meter by ID
 * @route GET /api/meters/:id
 * @param {string} id - MongoDB ObjectId of the meter
 * @returns {Object} Meter object
 */
router.get('/:id', async (req, res) => {
  try {
    // Extract meter ID from URL parameters
    const { id } = req.params;

    // Find meter by ID in database
    const meter = await Meter.findById(id);

    // If meter not found, return 404
    if (!meter) {
      return res.status(404).json({
        error: 'Not found',
        message: `No meter found with ID: ${id}`,
      });
    }

    // Return meter object with 200 OK status
    res.status(200).json(meter);
  } catch (error) {
    // Log error for debugging
    console.error('Error fetching meter:', error);

    // Return 500 Internal Server Error with error message
    res.status(500).json({
      error: 'Failed to fetch meter',
      message: error.message,
    });
  }
});

// ============================================================================
// Export Router
// ============================================================================
module.exports = router;
