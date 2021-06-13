const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cellars: [{
        type: Schema.Types.ObjectId,
        ref: 'Cellar'
    }]
});

userSchema.plugin(uniqueValidator);

const User = model('User', userSchema, 'users');

module.exports = User;
