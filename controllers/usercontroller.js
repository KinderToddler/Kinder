const db = require("../models/index");


// Defining methods for the user controller
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllProfiles: function(req, res) {
    db.Profile
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findOne({ _id: req.params.id })
      .populate('profile')
      .populate('matches')
      .then(dbModel => {
        res.json(dbModel);
        // console.log(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createProfile: function(req, res) {
    db.Profile
    .create(req.body)
    .then(function(dbProfile) {
      // If a profile was created successfully, find one user with an `_id` equal to `req.params.id`. Update the user to be associated with the new profile
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.User.findOneAndUpdate({ _id: req.params.id }, {profile: dbProfile._id}, { new: true });
    })
    .then(function(dbUser) {
      // If we were able to successfully update a profile, send it back to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
  },
  addMatch: function(req, res) {
    db.User
    .findOneAndUpdate({ _id: req.body.id }, {$push: {matches: req.body.match_id}}, { new: true })
    
    .then(function(dbUser) {
      return db.User.findOneAndUpdate({ _id: req.body.match_id}, {$push:{matches: req.body.id}}, { new: true })
    })
    .then(function(dbUser) {
      // If we were able to successfully update a profile, send it back to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
  },
  getPotentialMatches: function(req, res){
    db.User
    .findById({_id: req.params.id})
    .then(function(dbUser){
      req.dbUser = dbUser
      return db.User.find({ _id : { $nin: dbUser.matches }})
    })
    .then(function(dbAllUsers){
      res.json(dbAllUsers)
    })
  }
};
