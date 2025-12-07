const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"home.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname,"contact.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname,"about.html"));
});

app.get("/services", (req, res) => {
    res.sendFile(path.join(__dirname,"services.html"));
});

app.get("/feedback  ", (req, res) => {
    res.sendFile(path.join(__dirname,"feedback.html"));
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});