const masterCategory = require("./API/Master/Master_Category.js");
const route1 = require("./API/Master/route1.js");
const colorcode = require("./API/Master/ColorCode.js");

const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());


app.use('/masterCategory', masterCategory)
app.use('/route1', route1)
app.use('/colorcode', colorcode)

module.exports = app;
