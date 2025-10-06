// ============================================================================
// Meter Model
// ============================================================================
// Mongoose schema for utility meters (electricity, water, etc.)

const mongoose = require('mongoose');

// ============================================================================
// Schema Definition
// ============================================================================
const meterSchema = new mongoose.Schema(
  {
    // Human-readable name for the meter (e.g., "Main Electricity Meter")
    name: {
      type: String,
      required: [true, 'Meter name is required'],
      trim: true,
    },
    // Type of utility being measured
    kind: {
      type: String,
      required: [true, 'Meter kind is required'],
      enum: {
        values: ['electricity', 'water'],
        message: '{VALUE} is not a valid meter kind. Must be electricity or water.',
      },
    },
  },
  {
    // Automatically add createdAt and updatedAt timestamps
    timestamps: true,
  }
);

// ============================================================================
// Indexes
// ============================================================================
// Ensure only one meter of each kind exists (electricity, water)
meterSchema.index({ kind: 1 }, { unique: true });

// ============================================================================
// Export Model
// ============================================================================
module.exports = mongoose.model('Meter', meterSchema);
