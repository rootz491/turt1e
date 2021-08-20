const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const postController = require("./controllers/post");
const path = require("path");

require("dotenv").config();

const allowedOrigins = 'localhost:3000';
const app = express();

app.use(express.static(path.resolve(__dirname, './views/build')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

app.use("/api", postController);

//  send index.html
app.get('/', (_, res) => res.sendFile(path.resolve(__dirname, './views/build', 'index.html')));

//  redirect to index.html
app.use((_, res) => res.redirect('/'));

app.listen(process.env.PORT, _ => {
    console.log("node is running on http://localhost:5000");
})