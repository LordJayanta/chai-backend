import mongoose from "mongoose";
import {DB_NAME} from '../constants.js'

const connectDb = async () => {
    try {
        const ConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\nMongoDB Connected!! DB Host: ${ConnectionInstance.connection.host}`);
    } catch (error) {
        console.log("Mongodb Connection Error: ", error);
        process.exit(1)
    }
}
export default connectDb;