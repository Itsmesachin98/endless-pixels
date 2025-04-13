require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allow frontend to access backend

const UNSPLASH_API_KEY = process.env.UNSPLASH_API_KEY;

app.get("/", (req, res) => {
    res.send("Welcome to the Unsplash API Proxy");
});

app.get("/api/photos", async (req, res) => {
    const count = req.query.count || 5;
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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
