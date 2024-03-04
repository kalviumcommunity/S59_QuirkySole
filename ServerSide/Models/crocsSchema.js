const mongoose = require('mongoose');

const CrocsSchema = new mongoose.Schema({
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

const crocs = mongoose.model('crocs', CrocsSchema)

module.exports = crocs