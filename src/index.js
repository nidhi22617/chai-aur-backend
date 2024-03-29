// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path: './.env'
});

const PORT = process.env.PORT || 8000;
connectDB() 
.then(()=> {
    app.listen(PORT, ()=> {
        console.log(`Server is running at port : ${PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err);
})









/*
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";

import express from "express";
const app = express()

function connectDB(){}

// connectDB()

( async()=> {
    try {
       await mongoose.connect(`${process.env
        .MONGO_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERROR", error);
            throw error
        })
        app.listen(process.env.PORT,() => {
            console.log(`App is listining on port:${process.env.PORT}`);
        })
        


    } catch (error) {
        console.log("ERROR", error);
        throw err
    }
})();
*/