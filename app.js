const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const postController = require("./controllers/post");

require("dotenv").config();

const allowedOrigins = 'localhost:3000';
const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

app.use("/api", postController);

app.listen(process.env.PORT, _ => {
    console.log("node is running on http://localhost:5000");
})