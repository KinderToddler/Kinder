
'use strict'

// Requiring our models
const db = require('../models')

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../middleware/isAuthenticated')


module.exports = (app, passport) => {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, then respond with the user.
  // Otherwise send an error

  // This function makes use of object destructuring when defining the
  // argument names for the route handler function which can be easy
  // to miss if you're not looking for it. Note the `({ user }` part
  // where this is happening.
  // app.post('/auth/login', passport.authenticate('local'), ({ user }, res) => {
  //   res.send({ user })
  // })

  app.post('/auth/login', passport.authenticate('local'), function(req, res) {
    console.log("authenticated")
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.send({user: req.user})
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post('/auth/signup', function(req, res) {
    db.User.create({
        username: req.body.username,
        password: req.body.password
      })
      .then(function(user) {
        res.json(user)
      })
      .catch(function(err) {
        res.json(err)
      })
  })


  app.get('/auth/user_data', isAuthenticated, (req, res) => {
    const { username } = req.user

    res.json({ user: { username}})
  })

  // Route for logging user out
  app.get('/logout', (req, res) => {
    req.logout()
    res.send({})
  })


  // Route for client to check if there's still a live server session
  app.get('/session', isAuthenticated, (req, res) => {
    const { username} = req.user

    res.json({ user: { username }})
  })

}
