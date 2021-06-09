const mongoose = require('mongoose');

const ZoneSchema = mongoose.Schema({
    name: { type: String, required: true},
    color: {type: String, required: true},
    columns: { type: Number, required: true},
    rows: { type: Number, required: true},
    cellar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cellar",
        required: true
    },
    bottles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bottle"
    }]
});

module.exports = mongoose.model('Zone', ZoneSchema);
