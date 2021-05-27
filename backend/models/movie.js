const { Schema, model } = require("mongoose");

const movieSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a valid title"],
      trim: true,
    },
    id: {
      type: Number,
      required: true,
    },
    poster_path: {
      type: String,
      required: true,
    },
    vote_average: {
      type: Number,
      required: true,
      default: 0.0,
    },
    overview: {
      type: String,
      required: true,
    },
    release_date: {
      type: String,
      required: true,
    },
    adult: {
      type: Boolean,
      required: true,
      default: false,
    },
    genre_ids: [{ type: String }],
    popularity: {
      type: Number,
      required: true,
      default: 0.0,
    },
    media_type: {
      type: String,
      required: true,
    },
    original_language: {
      type: String,
      required: true,
    },
    backdrop_path: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Movie", movieSchema);
