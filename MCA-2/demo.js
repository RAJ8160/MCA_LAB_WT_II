// //MiddleWare-1
// app.use((req,res,next)=>{
//     const currentDateTime = new Date().toLocaleString();
//     fs.appendFile('log.txt',`\n${currentDateTime}  URL:${req.url}  Method:${req.method} `,(error,data)=>{
//         if(error){
//             console.log('Error Occure in middleware',error);
//         }else{
//             console.log('Log inserted Successfully!');
//         }
//     })
//     req.myName = 'Raj'
//     console.log('This is Middleware 1.');
//     next()
// })
// fs.unlink('log.txt',(err) => {
//     if (err) {
//         console.error('Error deleting file:', err.message);
//     } else {
//         console.log('log.txt deleted successfully');
//     }
// })
// //Middleware-2
// app.use((req, res, next) => {
//     console.log('This is Middleware 2.', req.myName);
//     next()
// })
app.get('/faculty', async (req, res, next) => {
    try {
        const data = await facultyModel.find({});
        res.status(200).json({ Message: "Faculty Fetched Successfully.", Success: true, TotalFaculty: data })
    } catch (error) {
        console.log("Error Occure in Fetch Faculties.");
        const status = 400;
        const message = "Error Ocuure during fetch From Backend!";
        const extraDetails = "Please check function call !";

        const err = new Error(message);
        err.status = status;
        err.extraDetails = extraDetails;
        next(err)
    }
})

// //This is important place of errorMiddleware above app.listen
// app.use(errorMiddleware);