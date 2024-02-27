const express = require('express')
const mongoose = require('mongoose')

const app = express();

const port = 1111;

const {connectToDB, isConnected} = require('./db')

connectToDB()

app.get('/', (req, res)=>{
    if(isConnected()){
        res.send(`<h1>Your Database is connected</h1>`)
    }
    else{
        // mongoose.disconnect()
        res.send(`<h1>Your Database is not connected</h1>`)
    }
})



app.listen(port, ()=> {
    console.log(`App is running on port ${port}`)
    mongoose.connection.on('connected',()=>{
        console.log('connected')
    })
    mongoose.connection.on('disconnected',()=>{
        console.log('disconnected')
    })
})

module.exports = {
    app
}

// this is server.js