const facultyModel = require("../models/faculty.model");

const getAllFaculty = async (req,res)=>{
    try {
        const data = await facultyModel.find({});
        res.status(200).json({Message:"Faculty find Successfully!",Success:true,TotalFaculty:data})

    } catch (error) {
        console.log('Error From Fetch All faculties.',error);
        res.status(400).json({Message:"Error Occure",Success:false})
    }
}

const getByName = async (req,res)=>{
    try {
        const {name} = req.params
        const data = await facultyModel.find({name:name});
        res.status(200).json({Message:"Faculty find Successfully!",Success:true,TotalFaculty:data})

    } catch (error) {
        console.log('Error From Fetch All faculties.',error);
        res.status(400).json({Message:"Error Occure",Success:false})
    }
}

module.exports = {getAllFaculty,getByName}