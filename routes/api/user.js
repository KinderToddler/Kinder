const router = require("express").Router();
const userController = require("../../controllers/usercontroller.js");
const emailer = require("../../config/emailer.js");
const yelp = require("../../config/yelp.js")

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

//Matches with "/api/user/potentialmatches/:id"

router.route("/potentialmatches/:id")
  .get(userController.getPotentialMatches)

// Matches with "/api/user/profile"

router.route("/profile")
  .get(userController.findAllProfiles)

// Matches with "/api/user/match"

router.route("/match")
  .post(userController.addMatch)

// Matches with "/api/user/removematch"

router.route("/removematch")
  .post(userController.removeMatch)

//Matches with /api/user/profile/:id
router.route("/profile/:id")
	.post(userController.createProfile)

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

// Matches with "/api/user/sendemail"

router
	.route("/sendemail")
	.post(emailer.send)

// Matches with "/api/user/yelp/:zipcode"

router
  .route("/yelp/:zipcode")
  .get(yelp.findPlaygrounds)

module.exports = router;
