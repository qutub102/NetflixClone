const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { isAuthenticated } = require("../middleware/auth");

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);
router.route("/logout").get(authController.logout);
router
  .route("/userMovies")
  .put(isAuthenticated, authController.updateUserMovie)
  .get(isAuthenticated, authController.getUserMovies);
router.route("/:id").delete(isAuthenticated, authController.removeUserMovie);

router
  .route("/getUserProfile")
  .get(isAuthenticated, authController.getUserProfile);

module.exports = router;
