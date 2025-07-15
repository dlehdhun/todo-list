"use strict";

const db = require("../config/db");

class TodoStorage {
    static getAllTodos() {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM todo";
            db.query(query, (err, data) => {
                if (err) reject(`${err}`);
                else resolve(data);
            });
        });
    }

    static async save(todo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO todo(name) VALUES(?);";
            db.query(query, [todo.name], (err) => {
                if (err) reject(`${err}`);
                else resolve({ success: true });
            });
        });
    }

    static async edit(todo) {
        return new Promise((resolve, reject) => {
            const query = "UPDATE todo SET name = (?) WHERE id = (?);";
            db.query(query, [todo.name, todo.id], (err) => {
                if (err) reject(`${err}`);
                else resolve({ success: true });
            });
        });
    }

    static async remove(todo) {
        return new Promise((resolve, reject) => {
            const query = "DELETE FROM todo WHERE id = (?);";
            db.query(query, [todo.id], (err) => {
                if (err) reject(`${err}`);
                else resolve({ success: true });
            });
        });
    }
}

module.exports = TodoStorage;
