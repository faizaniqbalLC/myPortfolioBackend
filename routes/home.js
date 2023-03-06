const express = require("express");
const router = express.Router();
const User = require("./user.js");

router.post("/user", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const userCheck = await User.findOne({ email: email });
    if (userCheck) {
      return res.status(400).json({
        success: true,
        message: "Email already exists use another.",
      });
    }
    await User.create({
      email: email,
      name: name,
      message: message,
    });
    return res.status(200).json({
      success: true,
      message: "Message Sent Successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
