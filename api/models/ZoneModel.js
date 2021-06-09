const mongoose = require('mongoose');

const ZoneSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserId",
        required: true
    },
    name: { type: String, required: true},
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
