const express = require('express');
const mongoose = require('mongoose')
const {connectToDB, isConnected} = require('./db')

const cors = require('cors')
const app = express();

const port = 1213



app.use(cors())
const routes = require('./Controller/routes');
app.use(express.json());
// Mount routes
app.use('/api', routes);

connectToDB()

    app.get('/', (req, res)=>{
        if(isConnected()){
            res.send(`<h1>Your Database is connected</h1>`)
        }
        else{
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