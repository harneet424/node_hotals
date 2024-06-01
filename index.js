const express = require("express");
const db = require("./db");
const app = express();
const bodyParser = require("body-parser");
require('dotenv').config();
const PORT = process.env.PORT  || 3000;
app.use(bodyParser.json()); //the body parser is used to convert the JSON data into the object and return in the res.body


app.get("/", (req, res) => {
  res.send("hello word");
});



const ServicesRouter = require('./routes/ServicesRouter');
app.use('/services', ServicesRouter);
// modified from https://github
const MenuRouter = require('./routes/MenuRouter');
app.use('/menu', MenuRouter);


app.listen(PORT, () => {
  console.log("server is running on port 3000");
});
