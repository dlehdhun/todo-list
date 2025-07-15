const mysql = require("mysql");

const db = mysql.createConnection({
    host: "login-lecture.c9siq66kw3ve.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "leelee101004",
    database: "login_lecture", 
});

db.connect();

module.exports = db;