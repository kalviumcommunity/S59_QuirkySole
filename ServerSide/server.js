const express = require('express');
const mongoose = require('mongoose')
const {connectToDB, isConnected} = require('./db')

const cors = require('cors')
const app = express();

const port = 1213

app.use(cors())
const routes = require('./Controller/routes');
const reviewRoute = require('./Controller/Review-Routes')
const userRoute = require('./Controller/User-Routes')

app.use(express.json());
// Mount routes
app.use('/api', routes);
app.use('/review',reviewRoute )
app.use('/user', userRoute)

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