
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
    res.send({redirectTo: '/home'})
  });
  // The equivalent function in old JS would look like:
  /*
  app.post('/login', passport.authenticate('local'), function(req, res) {
    res.send({ user: req.user })
  })
  */


  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post('/auth/signup', function(req, res) {
    db.User.create({
        username: req.body.username,
        password: req.body.password
      })
      .then(function() {
        res.send({redirectTo: '/login'})
      })
      .catch(function(err) {
        res.json(err)
      })
  })

  // Route for logging user out
  app.get('/logout', (req, res) => {
    req.logout()
    res.send({})
  })

  // This commented out code is meant to demonstrate that route handlers
  // in express (ie the function definitions you pass to `app.get` after
  // the route to match on) can be used as passthrough functions that
  // perform a specific task and then call `next` which is the 3rd
  // argument that express passes to handler functions.

  // app.get('/list_of_handlers', handler1, handler2, handler3, handler4)

  // function handler1(req, res, next) {
  //   req.handler1Called = true
  //   console.log('')
  //   console.log('in handler 1')
  //   console.log('')
  //   next()
  // }

  // function handler2(req, res, next) {
  //   req.handler2Called = true
  //   console.log('')
  //   console.log('in handler 2')
  //   console.log('')

  //   next()
  // }

  // function handler3(req, res, next) {
  //   req.handler3Called = true
  //   console.log('')
  //   console.log('in handler 3')
  //   console.log('')

  //   next()
  // }

  // function handler4(req, res, next) {
  //   const { handler1Called, handler2Called, handler3Called } = req

  //   console.log('')
  //   console.log('in handler 4')
  //   console.log('')


  //   if ( handler1Called && handler2Called && handler3Called ) {
  //     res.send('Success!')
  //   }
  //   else {
  //     res.status(500).send('Oh noes!')
  //   }
  // }


  // Route for client to check if there's still a live server session
  app.get('/session', isAuthenticated, (req, res) => {
    const { username, id } = req.user

    res.json({ user: { username, id }})
  })

}
