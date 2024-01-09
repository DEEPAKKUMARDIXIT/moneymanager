const masterCategory = require("./API/Master/Master_Category.js");
const UserDetails = require("./API/Master/UserDetails.js");
const colorcode = require("./API/Master/ColorCode.js");

const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());


app.use('/masterCategory', masterCategory)
app.use('/UserDetails', UserDetails)
app.use('/colorcode', colorcode)

module.exports = app;
