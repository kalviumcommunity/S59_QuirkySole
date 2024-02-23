const express = require('express')

const app = express();

const port = 1111;

app.get('/', (req, res)=>{
    res.send("Pong")
})

app.listen(port, ()=> {
    console.log(`App is running on port ${port}`)
})

// this is server.js