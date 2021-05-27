const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");

dotenv.config({ path: "backend/config/config.env" });

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/movies", require("./routes/movieRoute"));
app.use("/api/auth", require("./routes/authRoute"));

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

app.use(require("./middleware/errors"));
// Routes not found
app.use((req, res, next) => {
  res.json({
    sucess: false,
    message: "Route not found",
    statusCode: 404,
  });
});
module.exports = app;
