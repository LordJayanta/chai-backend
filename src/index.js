// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

connectDb()
    .then(() => {
        app.on("Error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGODB CONNECTION FAILED !!!", err);
    })


















/*

import mongoose from "mongoose";
import {DB_NAME} from './constants.js'

import express from 'express';
const app = express();



(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("Error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port: ${process.env.PORT}`);
            console.log(`App is listening on http://localhost:${process.env.PORT}`);
            
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
})()

*/