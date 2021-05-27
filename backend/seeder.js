const moviesData = require("./data/movies");
const Movie = require("./models/movie");

const dotenv = require("dotenv");
const { deleteOne } = require("./models/movie");
dotenv.config({ path: "backend/config/config.env" });

require("./config/db").connectDB();

const importData = async () => {
  try {
    await Movie.deleteMany();

    const filteredMovieData = moviesData.map((movie) => {
      if (!movie.release_date) {
        movie.release_date = movie.first_air_date;
        delete movie["first_air_date"];
      }
      if (!movie.title) {
        movie.title = movie.original_title;
        delete movie["original_title"];
      }
      if (movie.original_language) delete movie["original_title"];
      if (movie.name) movie["name"];
      return movie;
    });
    await Movie.insertMany(filteredMovieData);
    console.log("Data imported");
  } catch (error) {
    console.log("Error in importing " + error);
    process.exit(1);
  }
};

importData();
