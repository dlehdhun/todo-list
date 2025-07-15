"use strict";

const db = require("../config/db");

class Userstorage {
    static getAllTodos() {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM todo";
            db.query(query, (err, data) => {
                if (err) reject(`${err}`);
                else resolve(data);
            });
        });
    }
}

module.exports = Userstorage;
