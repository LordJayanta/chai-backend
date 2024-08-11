import express, { urlencoded } from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

// read request as json from body, form etc.
app.use(express.json({limit: "16kb"}))

// read request URL
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// handel pubic folder
app.use(express.static("public"))

// handle cookes
app.use(cookieParser())
export {app}