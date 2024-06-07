import express from "express";
import dotEnv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from './db/connectMongoDB.js';

dotEnv.config();

const app = express();
const PORT = process.env.PORT || 5000;

console.log(process.env.MONGO_URI);

app.use("/api/auth",authRoutes);

var port = 8000;
app.listen(port, () => {
    console.log(`server is running on port 8000 ${port}`);
    connectMongoDB();
})