const mongoose = require('mongoose');
require('dotenv').config();
// const mongoURL = 'mongodb://localhost:27017/services';
const mongoURL = process.env.DB_URI ;

mongoose.connect(mongoURL, { 
    useNewUrlParser: true,
     useUnifiedTopology: true 
    });

    const db = mongoose.connection;

    db.on("connected",()=>{
        console.log("Connected to Mongoose server")
    });
    db.on("error",()=>{
            console.log("Error to Mongoose server")
   9 })
    db.on("disconnected",()=>{
        console.log("Disconnected to Mongoose server")
    });

    module.exports = db;