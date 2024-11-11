const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number,
    Gender: {
        type: String, 
        enum: ['male', 'female', 'other'],
    }
});

const userModel = mongoose.model('user', userSchema);
module.exports = userModel