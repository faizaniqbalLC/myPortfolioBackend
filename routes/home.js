const express = require("express");
const router = express.Router();
const { createTransport } = require("nodemailer");

let transporter = createTransport({
  // service:"email",
  // host:process.env.HOST,
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "se.fizaniqbal@gmail.com", // Admin Gmail ID
    pass: "xqlzgbqlzdnqdzop", // Admin Gmail Password
  },
});

router.post("/user", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // const userMessage = `Hey, I am ${name}. My email is ${email}. My message is ${message}.`;

    let mailOptions = {
      from: "portfolio@complete.com",
      to: "se.fizaniqbal@gmail.com",
      subject: "User Message",
      template: "email",
      html: `<h1>User Name : ${name}<h1>    <h2>User Email: ${email}</h2>  <h3>User Message>: ${message}</h3>`,
    };
    // await sendMail(userMessage);
    await transporter.sendMail(mailOptions, (err) => {
      console.log(err);
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
