
'use strict'

// Requiring our models
const db = require('../models')

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../middleware/isAuthenticated')


module.exports = (app, passport) => {

  //Route for logging out a user
  app.post('/auth/login', passport.authenticate('local'), function(req, res) {
    res.send({user: req.user})
  });

  // Route for signing up a user. 
  app.post('/auth/signup', async function(req, res, next) {
    
    try {
      db.User.create({
        username: req.body.username,
        password: req.body.password
      }).then(function(dbuser) {
        next()
      })
      
    }
    catch (err) {
      res.json(err)
    }
  }, passport.authenticate('local'), ({ user }, res) => {
    res.send({user})
  })


  // Route for logging user out
  app.get('/auth/logout', (req, res) => {
    req.logout()
    res.send({redirectTo: '/'})
  })


  // Route for client to check if there's still a live server session, also sends data back about the user.
  app.get('/session', isAuthenticated, (req, res) => {
    const { username, _id } = req.user

    res.json({ user: { username, _id }})
  })

}
