const express = require('express');
const app =express();
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes.js');
const connect = require('./connection.js');

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
dotenv.config();


app.use('/',router);

const port = process.env.PORT  || 8080

connect()
    .then(()=>{
        try{
            app.listen(port,()=>{
                console.log(`Server listening to port ${port}`);
            })
        }catch(error){
            console.error(error);
            console.log("Can't connect to server");
        }
    }).catch(error=>{
        console.error(error);
        console.log("Can't connect to database");
    })
