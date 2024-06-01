const mongoose = require('mongoose');

// const mongoURL = 'mongodb://localhost:27017/services';
const mongoURL = 'mongodb+srv://harneetSingh:harneet%40123@cluster0.4zvxsbk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

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