// Import packages
const express = require("express");
const cors = require("cors");
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());

// Routes
app.use("/contact", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
