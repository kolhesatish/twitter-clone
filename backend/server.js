import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from './db/connectMongoDB.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use("/api/auth", authRoutes);


// Connect to MongoDB and start the server
const startServer = async () => {
    try {
        await connectMongoDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start the server", error);
        process.exit(1); // Exit process with failure
    }
};

startServer();
