//Connect DB in db.js
const mongoose = require('mongoose');

const MONGO_URL = 'mongodb://localhost:27017/MCA1'

async function connectDB(){
try {
 await mongoose.connect(MONGO_URL)
 console.log("Connected SuccessFully!");
} catch (error) {
    console.log("MONGO Connection ERROR:",error);
}
}
module.exports = connectDB