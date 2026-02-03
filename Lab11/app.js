const express = require('express')
const connectDB = require('./config/db')
const faculty = require('./models/faculty.model')
const FacultyRouter = require('./routes/faculty.route')
const app = express()
app.get('/',(req,res)=>{
    res.end('Hello Word')
})


app.use('/faculty',FacultyRouter)
connectDB()
app.listen(8080, () => {
    console.log('Srevre Run At port 8080');
})

//create this database containing 3-4 fileds:
//students,faculty
//bank,products
// facultyModel.create({
//     name: 'Raj',
//     age: 19,
//     email: 'Raj@gmail.com'
// })

