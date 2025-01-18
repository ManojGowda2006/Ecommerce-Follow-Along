const app = require('./app.js');
const connectDatabase = require("./db/database.js");
const bcrypt = require("bcrypt");

process.on("uncoughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for handling uncought exception`);
})

if(process.env.NODE_ENV !== "PRODUCTION"){
  require("dotenv").config({ 
    path: "./config/.env" 
  });
};

connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT}`
  )
});

process.on("unhandledRejection", (err) => {
  console.error(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");
  server.close(() => {
      process.exit(1);
});
});