require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allow frontend to access backend

const UNSPLASH_API_KEY = process.env.UNSPLASH_API_KEY;

// Root route to verify the server is running and provide a welcome message
app.get("/", (req, res) => {
    res.send("Welcome to the Unsplash API Proxy");
});

// Endpoint to fetch random photos from the Unsplash API
// Accepts an optional 'count' query parameter to specify the number of photos to retrieve
app.get("/api/photos", async (req, res) => {
    const count = req.query.count || 5; // Default to 5 photos if 'count' is not provided
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&count=${count}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log("Error occured while fetching the unsplash API", err);
        res.status(500).json({ error: "Failed to fetch photos" });
    }
});

// Start the server and listen on the specified port
// Logs a message to confirm the server is running
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
