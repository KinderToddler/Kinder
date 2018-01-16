
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
var UserSchema = new Schema({
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
  matches: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  likes: {
    type: String,
    required: true
  },
  dislikes: {
    type: String,
    required: true
  },
  allergies: {
    type: String,
    required: true
  },
  height: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the Article model
module.exports = User;
