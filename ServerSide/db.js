// importing mongoose and dotenv
const mongoose = require('mongoose')
require('dotenv').config()

//Function for connecting to the Database
const connectToDB = async() => {
    try{
        await mongoose.connect(process.env.DB_URI)
        console.log("MONGODB CONNETED")
    }
    catch(err){
        console.log("Connection Failed")
    }
}


// Function for disconnecting from the Database
const disconnect = async() => {
    mongoose.disconnect()
    console.log("Mongoose Disconnected")
}


//IsConnected function to return true or false if the connection is succesful or not
const isConnected= () => {
    return mongoose.connection.readyState === 1;
}


// exporting the modules
module.exports = {
    connectToDB,
    disconnect,
    isConnected
}

