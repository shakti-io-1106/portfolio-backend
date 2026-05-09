const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

//Create Contact message
router.post("/", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
      contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
