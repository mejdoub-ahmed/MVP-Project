const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.urlencoded({ extended: true }));

const houserouter = require("./routes/house.js");

app.use(express.json());
app.use(cors());

app.use("/api/house", houserouter);

module.exports = app;
