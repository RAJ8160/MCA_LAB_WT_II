const express = require('express');
const { getAllFaculty, getByName } = require('../controllers/faculty.controller');
const FacultyRouter = express.Router()

FacultyRouter.get('/',getAllFaculty)


FacultyRouter.get('/:name',getByName)

module.exports = FacultyRouter