const mongoose = require('mongoose');

const ZoneSchema = mongoose.Schema({
    name: { type: String, required: true},
    columns: { type: Number, required: true},
    row: { type: Number, required: true},
    cellarUid: { type: String, required: true}
});

module.exports = mongoose.model('Zone', ZoneSchema);