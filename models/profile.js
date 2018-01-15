
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
var ProfileSchema = new Schema({
  favoriteColor: {
    type: String,
    required: true
  },
  favoriteShow: {
    type: String,
    required: true
  },
  favoriteFood: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Profile = mongoose.model("Profile", ProfileSchema);

// Export the Profile model
module.exports = Profile;
