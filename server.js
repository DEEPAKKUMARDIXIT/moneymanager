
const express = require('express');
var cors = require('cors');
const bodyparser = require('body-parser')
const http = require('http');
const app = require('./app.js');
const { disconnect } = require('process');
const server = http.createServer(app)
const connection = require("./config/db.js")

const routs = express();
const port = process.env.PORT || 5000;

server.listen(port, () => console.log('PORT NUMBER ===', port)).on("error", function (err) {
    const { exec } = require('child_process');
    console.log("killed")

    exec('command here', { 'shell': 'powershell.exe' }, (error, stdout, stderr) => {
        stdout = `npx kill-port ${port}`
        console.log("killed 2", stdout)
    })
});

