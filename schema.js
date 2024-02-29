const mongoose = require('mongoose');

const shoes = new mongoose.Schema({
    brandName: {
        type:String,
        required : true
    },
    brandCEO: {
        type:String,
        required : true
 }
})

const brand = mongoose.model('brand', shoes)

module.exports = brand