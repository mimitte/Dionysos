const { Schema, model } = require("mongoose");

const ZoneSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: { type: String, required: true},
    color: {type: String, required: true},
    columns: { type: Number, required: true},
    rows: { type: Number, required: true},
    bottles: [{
        type: Schema.Types.ObjectId,
        ref: "Bottle"
    }]
});

const Zone = model('Zone', ZoneSchema, 'zones');

module.exports = Zone;
