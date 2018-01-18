// // Send every request to the React app
// // Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.listen(PORT, function() {
//   console.log(`🌎 ==> Server now on port ${PORT}!`);
// });


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const http = require('http')
const session = require('express-session')
const passport = require('passport')
const path = require('path')
const server = http.createServer(app)


// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require('./models')



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Serve up static assets
app.use(express.static("client/build"));

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// We need to use sessions to keep track of our user's login status
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}))


// Passing the passport singleton to our passport middleware to load our authentication strategies
app.use(passport.initialize())
app.use(passport.session())

require('./middleware/passport')(passport)

// Requiring our authentication routes
require('./routes/auth.js')(app, passport)

// Add routes, both API and view
app.use(routes);


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/kinder",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
