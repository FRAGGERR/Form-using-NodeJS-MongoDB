const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost:27017/nodejs').then(() => {
    console.log("Database is connected");
})
module.exports = connection