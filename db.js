const mongoose = require('mongoose')
require('dotenv').config()

// const URL = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.pau4xjn.mongodb.net/db?retryWrites=true&w=majority&appName=Cluster0`

const connectToDB = async() => {
    try{
        await mongoose.connect(process.env.DB_URI)
        console.log("MONGODB CONNETED")
    }
    catch(err){
        console.log("Connection Failed")
    }
}

const disconnect = async() => {
    mongoose.disconnect()
    console.log("Mongoose Disconnected")
}

const isConnected= () => {
    return mongoose.connection.readyState === 1;
}

module.exports = {
    connectToDB,
    disconnect,
    isConnected
}

