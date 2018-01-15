const router = require("express").Router();
const userController = require("../../controllers/usercontroller.js");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/profile"

router.route("/profile")
  .get(userController.findAllProfiles)

// Matches with "/api/user/match"

router.route("/match")
  .post(userController.addMatch)


//Matches with /api/user/profile/:id
router.route("/profile/:id")
	.post(userController.createProfile)

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
