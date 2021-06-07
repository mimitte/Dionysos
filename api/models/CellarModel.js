const mongoose = require('mongoose');

const CellarSchema = mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    zones: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Zone"
    }],
    zones: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
});

module.exports = mongoose.model('Cellar', CellarSchema);