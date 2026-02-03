const  mongoose = require('mongoose')

const facultySchema = mongoose.Schema({
    name:String,
    age:Number,
    Subject:{
        type:String,
        required:[true,"Please Enter Subject!"],
        unique:true
    }
},{timestamps:true})

module.exports 
= mongoose.model('Faculty',facultySchema);

//Bank,Faculty,Students,Products-> 
// total 4 database
// use timestamps,requried,unique
//  in you database schema

