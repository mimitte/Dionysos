const { Schema, model } = require("mongoose");

const CellarSchema = new Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    zones: [{
        type: Schema.Types.ObjectId,
        ref: 'Zone'
    }]
});

const Cellar = model('Cellar', CellarSchema, 'cellars');

module.exports = Cellar;