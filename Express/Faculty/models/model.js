const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema({
  facultyId: { type: Number, require: true},  
  name: { type: String, required: true },
  department: { type: String, required: true },
  experience: { type: Number, default: 0 },
  email: { type: String, required: true}
});

module.exports = mongoose.model("facutlie", FacultySchema, "faculties");
