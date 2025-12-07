const express = require("express"); // ← required

const router = express.Router();
const {
  getAllFaculty,
  getFacultyById,
  createFaculty,
  updateFacultyById,
  deleteFacultyById
} = require("../controllers/controller");

// GET all
router.get("/", getAllFaculty);

// GET by facultyId
router.get("/:id", getFacultyById);

// CREATE new faculty
router.post("/", createFaculty);

// UPDATE by facultyId
router.put("/:id", updateFacultyById);

// DELETE by facultyId
router.delete("/:id", deleteFacultyById);

module.exports = router;
