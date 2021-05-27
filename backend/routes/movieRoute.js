const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.route("/").get(movieController.AllMovies);
router.route("/:id").get(movieController.getMovieById);

module.exports = router;
