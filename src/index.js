// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import connectDb from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDb();


















/*

import mongoose from "mongoose";
import {DB_NAME} from './constants.js'

import express from 'express';
const app = express();



(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        express.on("Error", (error) => {
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