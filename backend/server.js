const express = require('express')
const app = express()

const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
      await mongoose.connect("mongodb://localhost:27017/Ecommerce-follow-along", {
        dbName: "Ecommerce-follow-along"
      });
      console.log("Connected to Ecommerce-follow-along database");
    } catch (err) {
      console.error("Error connecting to the database:", err);
    }
  };
  app.get('/',(req,res)=>{
    res.send('hello')
  })
  
  // Call the function to connect to the database
  connectToDatabase();

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})