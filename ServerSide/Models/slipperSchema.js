const mongoose = require('mongoose');

const slipperschema = new mongoose.Schema({
    ID: {
        type:Number
    },
    name: {
        type:String
    },
    imageURL: {
        type:String
    },
    material: {
        type:String
    },
    occasion:{
        type:String
    },
    price: {
        type: String
    },
    description: {
        type: String
    }
})

const slippers = mongoose.model('slippers', slipperschema)

module.exports = slippers