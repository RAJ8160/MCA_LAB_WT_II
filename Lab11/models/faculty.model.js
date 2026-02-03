const mongoose = require('mongoose')

const FacultySchema = mongoose.Schema({
    name:String,
    age:Number,
    email:String
},{timestamps:true})

module.exports = mongoose.model("Faculty",FacultySchema)

