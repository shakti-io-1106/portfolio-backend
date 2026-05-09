const express = require("express");
const router = express.Router();

const Project = require("../models/Project");

//Get Projects
router.get("/", async (req, res) => {
  try {
    const Projects = await Project.find();
    res.json(Projects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//Create Project
router.post("/", async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
