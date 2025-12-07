// 1. Demonstrate the use of middleware in Express.

const express = require("express");
const app = express();

// ------------------------
// SIMPLE MIDDLEWARE
// ------------------------
app.use((req, res, next) => {
    console.log("Middleware running...");
    console.log("Request URL:", req.url);
    console.log("Request Method:", req.method);

    next();   // Allow request to go to next middleware/route
});

// ------------------------
// ROUTES
// ------------------------
app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page from Lab_10");
});

// ------------------------
// START SERVER
// ------------------------
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
