// Create a hello world webapp using ExpressJS.
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World from ExpressJS!");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});


//Create a webapp with 5 pages like about, contact etc.. using ExpressJS
