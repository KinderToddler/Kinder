// const express = require("express");
// const path = require("path");
// const PORT = process.env.PORT || 3001;
// const app = express();

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

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
const io = require('socket.io')
const session = require('express-session')
const passport = require('passport')
const path = require('path')
const server = http.createServer(app)
const socketIo = io(server)


// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require('./models')

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));

// We need to use sessions to keep track of our user's login status
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}))

// Requiring our authentication routes
require('./routes/auth.js')(app, passport)

// Passing the passport singleton to our passport middleware to load our authentication strategies
require('./middleware/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

// Add routes, both API and view
app.use(routes);

socketIo.on('connection', socket => {

  const { username } = socket.handshake.query
  console.log(`${ username } connected`)

  socket.on('client:message', data => {
    console.log(`${ data.username }: ${ data.body }`)

    // message received from client, now broadcast it to everyone else
    socket.broadcast.emit('server:message', data)
  })

  socket.on('disconnect', () => {
    console.log(`${ username } disconnected`)
  })

})


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
