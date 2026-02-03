const express = require('express')
const connectDB = require('./db')
const facultyModel = require('./models/faculty.model')
const fs = require('fs')
const errorMiddleware = require('./error.middleware')
const app = express()

app.get('/', (req, res) => {
    res.send('HELLO Word.')
})

// facultyModel.create({
//     name: 'Raj',
//     age: 19,
//     Subject: 'WT'
// })
connectDB()
app.use((req,res,next)=>{
    req.myName = 'ABC'
    fs.appendFileSync('log.txt',`\n${Date()}  - Method:${req.method}   URL:${req.url}`)
    console.log('This is First Middleware!');
    next()
})
app.use((req,res,next)=>{
    console.log("MiddleWare2",req.myName);
    console.log('This is First Middleware 2!');
    next()
})
app.get('/faculties',async(req,res)=>{
    console.log("Route",req.myName);

    console.log('This is in Get Route')
    try {
       const data = await facultyModel.find();
       res.status(200).json(data)
    } catch (error) {
        console.log('Error in Fetch Faculties',error);
        res.status(500)
    }
})

app.use(errorMiddleware)


app.listen(8080, () => {
    console.log('Srevre Run At port 8080');
})

//create this database containing 3-4 fileds:
//students,faculty
//bank,products

