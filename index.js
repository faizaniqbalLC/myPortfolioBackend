// Import packages
const express = require("express");
const cors = require("cors");
const home = require("./routes/home");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");

// Middlewares
const app = express();
dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());

// Routes
app.use("/contact", home);

// connection
const port = process.env.PORT || 9001;
mongoose
  .connect(
    "mongodb+srv://fizan-iqbal:fiz---54321@cluster0.lispju5.mongodb.net/userData"
  )
  .then(() => {
    console.log("connected");
    app.listen(port, () => console.log(`Listening to port ${port}`));
  })
  .catch((err) => {
    throw new Error(err);
  });
