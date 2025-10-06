// ============================================================================
// Meter Seeder
// ============================================================================
// Idempotent function to ensure default meters exist in the database

const Meter = require('../models/Meter');

/**
 * Ensures exactly one electricity meter and one water meter exist in the database.
 * This function is idempotent - safe to run multiple times without creating duplicates.
 *
 * @returns {Promise<void>}
 */
async function ensureMeters() {
  try {
    // ========================================================================
    // Electricity Meter
    // ========================================================================
    // Check if electricity meter already exists
    const electricityMeter = await Meter.findOne({ kind: 'electricity' });

    if (!electricityMeter) {
      // Create default electricity meter if it doesn't exist
      await Meter.create({
        name: 'Electricity Main',
        kind: 'electricity',
      });
      console.log('✅ Created default electricity meter');
    } else {
      console.log('✅ Electricity meter already exists');
    }

    // ========================================================================
    // Water Meter
    // ========================================================================
    // Check if water meter already exists
    const waterMeter = await Meter.findOne({ kind: 'water' });

    if (!waterMeter) {
      // Create default water meter if it doesn't exist
      await Meter.create({
        name: 'Water Main',
        kind: 'water',
      });
      console.log('✅ Created default water meter');
    } else {
      console.log('✅ Water meter already exists');
    }
  } catch (error) {
    // Log error but don't crash the server
    // This allows the API to start even if seeding fails
    console.error('❌ Error ensuring meters:', error.message);
  }
}

// ============================================================================
// Export
// ============================================================================
module.exports = ensureMeters;
