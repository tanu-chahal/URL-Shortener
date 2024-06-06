import express from "express";
import dotenv from "dotenv";
import urlRoute from "./routes/url.route.js";
import {connectToMongoDB} from "./connectDB.js";
import { handleRedirection } from "./controllers/url.controller.js";

const app = express();
const PORT = 4000;
dotenv.config();

connectToMongoDB(process.env.MONGO_URI).then(()=>{console.log("MongoDB connected!")}).catch((err)=>console.log("Error: "+err));
app.use(express.json())

app.use('/url', urlRoute);
app.use('/:shortId', handleRedirection)

app.listen(PORT, ()=>{console.log(`Server listening on port: ${PORT}`)})