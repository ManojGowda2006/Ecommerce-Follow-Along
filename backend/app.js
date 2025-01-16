const express = require("express");
const app = express();
const ErrorHandler = require('./utils/ErrorHandler');

if(process.env.NODE_ENV !== 'production'){
    require("dotenv").config({
        path : "backend/config/.env"
    })
}

app.use((err,req,res,next) => {
    if(err instanceof ErrorHandler){
        return res.status(err.statusCode || 500).json({
            message:err.message,
            stack : err.stack
        });
    }

    res.status(500).json({ message : "Internal Server Error" });
});

module.exports = app;
