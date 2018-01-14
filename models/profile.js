var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
var ProfileSchema = new Schema({
  // `firstName` is required and of type String
  firstName: {
    type: String,
    required: true
  },
  // `lastName` is required and of type String
  lastName: {
    type: String,
    required: true
  },
  matches: {
    type: Schema.Types.ObjectId,
    ref: "Profile"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Profile = mongoose.model("Profile", ProfileSchema);

// Export the Article model
module.exports = Profile;
