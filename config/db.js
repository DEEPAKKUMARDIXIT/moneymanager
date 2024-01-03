const mysql = require('mysql');

var connection = mysql.createPool({
    host:'216.10.245.231',
    user:'finquest_root',
    password:'Deepak@123',
    port: 3306,
    database:'finquest_moneymanager',
    multipleStatements:true,
    dateStrings:true
});


connection.getConnection(function (err) {
    console.log("Connected Error", err); // true
    if (err) throw err;
    console.log("Database Connected");
});

connection.on('error', function (err) {
    console.error('Database error:', err);
    connection.destroy(); // destroy the connection to prevent it from being reused
});

module.exports = connection;