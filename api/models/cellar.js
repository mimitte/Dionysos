const mongoose = require('mongoose');

const CellarSchema = mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true}
});

module.exports = mongoose.model('Cellar', CellarSchema);