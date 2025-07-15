"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async getAllTodos() {
        try {
            const todos = await UserStorage.getAllTodos();
            return { success: true, todos };
            
        } catch (err) {
            return { success: false, err };
        }
    }

}

module.exports = User;