const mongoose = require('mongoose');

const BottleSchema = mongoose.Schema({
  country: { type: String, required: true},
  region: { type: String, required: true },
  name: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  location: {
    column: { type: Number, required: false },
    row: { type: Number, required: false }
  },
  zone: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Zone",
    required: true
  }
});

module.exports = mongoose.model('Bottle', BottleSchema);