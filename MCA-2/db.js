require('dotenv').config({
    path:'./.env'
})
const mongoose = require('mongoose')

async function connectDB() {
    try {
        const instance = await mongoose.connect(process.env.MONGO_URI)
        console.log('Db connect Successfully !!', instance.connection.host);
    } catch (error) {
        console.log('MONGO CONNECTION :', error);
    }
}

module.exports = connectDB