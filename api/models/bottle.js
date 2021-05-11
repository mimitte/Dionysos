const mongoose = require('mongoose');

const BottleSchema = mongoose.Schema({
  country: { type: String, required: true},
  region: { type: String, required: true },
  name: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  // note: { type: String, required: false },
  // vaultUid: { type: String, required: true },
  // horizontalPosition: { type: Number, required: true },
  // verticalPosition: { type: Number, required: true }
});

module.exports = mongoose.model('Bottle', BottleSchema);