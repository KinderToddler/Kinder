
var mongoose = require("mongoose");
var bcrypt = require("bcrypt")
var SALT_WORK_FACTOR = 10

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

  UserSchema.methods.validPassword = function( password ) {
    return bcrypt.compareSync(password, this.password)
  };

  UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });


  });

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the Article model
module.exports = User;
