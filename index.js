const express = require("express");
const db = require("./db");
const app = express();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bodyParser = require("body-parser");
require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json()); //the body parser is used to convert the JSON data into the object and return in the res.body
const Menu = require('./models/Menu');
// const bcrypt = require('bcrypt');


passport.use(new LocalStrategy(async (username, password, done) => {

  try {
        const user = await Menu.findOne({ username: username });
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }
        const isMatch = (password === user.password); 
        if (!isMatch) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user);
      } 
      catch (error) {

      return done(error)
  } 
}))


app.get("/",passport.authenticate('local',{session :false}), (req, res) => {
  res.send("hello word");
});

app.use(passport.initialize());

const ServicesRouter = require('./routes/ServicesRouter');
app.use('/services', ServicesRouter);

const MenuRouter = require('./routes/MenuRouter');
app.use('/menu', MenuRouter);


app.listen(PORT, () => {
  console.log("server is running on port 3000");
});
