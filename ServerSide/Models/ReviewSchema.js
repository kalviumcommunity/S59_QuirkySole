const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})

const review = mongoose.model('review', ReviewSchema)

module.exports = review