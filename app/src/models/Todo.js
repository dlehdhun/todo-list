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

    async add() {
        const client = this.body;
        try {
        const response = await TodoStorage.save(client);
        return response;
        } catch (err) {
            return {success : false, err};
        }
    }

    async edit() {
        const client = this.body;
        try {
        const response = await TodoStorage.edit(client);
        return response;
        } catch (err) {
            return {success : false, err};
        }
    }

    async remove() {
        const client = this.body;
        try {
        const response = await TodoStorage.remove(client);
        return response;
        } catch (err) {
            return {success : false, err};
        }
    }

}

module.exports = Todo;