const app = require('./app');
const connectDatabase = require("./db/database");

process.on("uncoughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for handling uncought exception`);
})

if(process.env.NODE_ENV !== "PRODUCTION"){
  require("dotenv").config({ 
    path: "./config/config.env" 
  });
};

connectDatabase();

const server = app.listen(5000, () => {
  console.log(
    `Server is running on http://localhost:${5000}`
  )
});

process.on("unhandledRejection", (err) => {
  console.error(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");
  server.close(() => {
      process.exit(1);
});
});