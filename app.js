const express = require('express');
const db = require('./db/mongoose');


const app = express();

app.get('/',(req,res)=>{
    res.send('working');
})

app.listen(3000,()=>{
    console.log('server started');
})