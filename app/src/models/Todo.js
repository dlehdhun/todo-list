"use strict";

const TodoStorage = require("./TodoStorage");

class Todo {
    constructor(body) {
        this.body = body;
    }

    async getAllTodos() {
        try {
            const todos = await TodoStorage.getAllTodos();
            return { success: true, todos };

        } catch (err) {
            return { success: false, err };
        }
    }

}

module.exports = Todo;