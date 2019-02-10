const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true,
    },
    age: {
        type: Number
    },
    phoneNumber: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);