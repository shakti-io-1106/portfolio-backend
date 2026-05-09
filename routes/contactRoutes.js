const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

//Create Contact message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = await Contact.create(req.body);

    //SEND email
    const emailSent = await sendEmail(name, email, message);

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
      contact,
    });

    if (!emailSent) {
      res.status(500).json({
        success: false,
        message: "Email Failed To Send",
      });
    }

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
