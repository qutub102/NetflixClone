const User = require("../models/user");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");
const Movie = require("../models/movie");

exports.register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return next(new ErrorHandler("Please enter proper details"));

  const isUserExists = await User.findOne({ email });
  if (isUserExists) return next(new ErrorHandler("User already exist", 400));

  const user = await User.create(req.body);
  sendToken(user, 201, res);
});

exports.login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new ErrorHandler("Please enter proper details"));

  const user = await User.findOne({ email: email }).select("+password");

  if (!user) return next(new ErrorHandler("Invalid email or password", 401));
  if (!(await user.matchPassword(password))) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  sendToken(user, 201, res);
});

exports.logout = catchAsyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({
      success: true,
      message: "Logout",
    });
});

exports.updateUserMovie = catchAsyncError(async (req, res, next) => {
  const { movieId } = req.body;
  const movie = await Movie.findOne({ _id: movieId });
  if (!movie) return next(new ErrorHandler("Movie not found", 404));

  const user = await User.findOne({ _id: req.user._id });

  const isMovieExits = user.userMovies.find(
    (m) => m.movieId.toString() === movieId.toString()
  );
  if (isMovieExits) return next(new ErrorHandler("Movie already exists", 400));

  user.userMovies.push({ movieId });
  await user.save({ validateBeforeSave: false });
  res.json({
    success: true,
  });
});

exports.getUserMovies = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne(
    { _id: req.user._id },
    { userMovies: 1 }
  ).populate("userMovies.movieId");

  res.json({
    success: true,
    count: user.userMovies.length,
    userMovies: user.userMovies,
  });
});

exports.getUserProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ _id: req.user._id }).select("-userMovies");

  res.json({
    success: true,
    user,
  });
});

exports.removeUserMovie = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ _id: req.user._id });
  const movieFilter = user.userMovies.filter(
    (m) => m.movieId.toString() !== req.params.id
  );
  user.userMovies = movieFilter;
  user.save({ validateBeforeSave: false });
  res.json({
    success: true,
  });
});
