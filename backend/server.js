const app = require("./app");

// console.log(a);  uncaughtException
// uncaughtException Handling
process.on("uncaughtException", (err) => {
  console.log(`uncaughtException Error : ${err.message}`);
  console.log("Shutting down server due to uncaught exception");
  process.exit(1);
});

// Setting up config file
if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").config({ path: "backend/config/config.env" });

// connedting mongodb
require("./config/db").connectDB();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `server running on ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

// unhandled Promise Rejection like mongo uri invalid
process.on("unhandledRejection", (err) => {
  console.log(`unhandledRejection Error : ${err.message}`);
  console.log("Shutting down server due to unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
