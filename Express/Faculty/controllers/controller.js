const Faculty = require("../models/model");


// GET all faculty
exports.getAllFaculty = async (req, res) => {
  try {
    const data = await Faculty.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// GET faculty by ID
exports.getFacultyById = async (req, res) => {
  try {
    const faculty = await Faculty.findOne({ facultyId: Number(req.params.id) }); // convert string to number
    if (!faculty) {
      return res.status(404).json({ message: "Faculty Not Found" });
    }
    res.status(200).json(faculty);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};


// CREATE faculty
exports.createFaculty = async (req, res) => {
  try {
    const newFaculty = new Faculty(req.body);
    const savedFaculty = await newFaculty.save();
    res.status(201).json(savedFaculty);
  } catch (error) {
    res.status(400).json({ message: "Error creating Faculty", error });
  }
};



// UPDATE faculty by facultyId
exports.updateFacultyById = async (req, res) => {
  try {
    const updatedFaculty = await Faculty.findOneAndUpdate(
      { facultyId: Number(req.params.id) },  // query by facultyId
      req.body,                              // data to update
      { new: true }                          // return the updated document
    );

    if (!updatedFaculty) {
      return res.status(404).json({ message: "Faculty Not Found" });
    }

    res.status(200).json(updatedFaculty);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};



// DELETE faculty by facultyId
exports.deleteFacultyById = async (req, res) => {
  try {
    const deletedFaculty = await Faculty.findOneAndDelete({ facultyId: Number(req.params.id) });

    if (!deletedFaculty) {
      return res.status(404).json({ message: "Faculty Not Found" });
    }

    res.status(200).json({ message: "Faculty Deleted Successfully", deletedFaculty });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};


