//Lab_11 & 12 both combine

const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/facutlie", require("./routes/route"));

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
