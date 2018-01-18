
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
var UserSchema = new Schema({
  // `firstName` is required and of type String
  firstName: {
    type: String,
    required: false
  },
  // `lastName` is required and of type String
  lastName: {
    type: String,
    required: false
  },
  matches: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  likes: {
    type: String,
    required: false
  },
  dislikes: {
    type: String,
    required: false
  },
  allergies: {
    type: String,
    required: false
  },
  height: {
    type: String,
    required: false
  },
  age: {
    type: String,
    required: false
  },
  imgUrl: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: true,
    index: {unique: true}
  },
  password: {
    type: String,
    required: true
  }

});

  UserSchema.methods.validPassword = function( pwd ) {
    return ( this.password === pwd );
  };

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the Article model
module.exports = User;
