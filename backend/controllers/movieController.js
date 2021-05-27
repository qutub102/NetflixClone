const Movie = require("../models/movie");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const APIFeatures = require("../utils/apiFeatures");

exports.AllMovies = catchAsyncError(async (req, res, next) => {
  //   const movies = await Movie.find();
  const totalMovies = await Movie.countDocuments();
  const filteredMovies = new APIFeatures(Movie.find(), req.query).filter();
  const movies = await filteredMovies.query;
  const currentCount = movies.length;

  res.json({
    success: true,
    totalMovies,
    currentCount,
    movies,
  });
});

exports.getMovieById = catchAsyncError(async (req, res, next) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) return next(new ErrorHandler("Movie not found", 404));
  res.json({
    success: true,
    movie,
  });
});
