// 2. Demonstrate the use of static middleware in Express.


const express = require("express");
const app = express();

// ------------------------------
// STATIC MIDDLEWARE
// ------------------------------
app.use(express.static("public"));
// Now Express will serve all files inside /public folder

// ROUTE
app.get("/", (req, res) => {
    res.send("Static files are being served!");
});

// START SERVER
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
