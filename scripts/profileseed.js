const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Profiles collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/kinder",
  {
    useMongoClient: true
  }
);

const profileSeed = [
  {
    firstName: "Eneida",
    lastName: "Revueltas",
  },
  {
    firstName: "Willow",
    lastName: "Revueltas",
  },
  {
    firstName: "Andrew",
    lastName: "Hoefel",
  }
  }];

db.Profile
  .remove({})
  .then(() => db.Profile.collection.insertMany(profileSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
