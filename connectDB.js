import mongoose from "mongoose";

export const connectToMongoDB = (url)=>{
    return mongoose.connect(url);
}