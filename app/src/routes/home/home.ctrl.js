"use strict";

const Todo = require("../../models/Todo");

const output = {
    home: async (req, res) => {
        const todoInstance  = new Todo();
        const response = await todoInstance.getAllTodos();

        if (response.success) {
            res.render("home/index", { todos: response.todos || []});
        } else {
            res.status(500).send("To-do 데이터를 가져오는 중 오류가 발생했습니다.");
        }
    }
};

const process = {
    addTodo: async (req, res) => {
        const todoInstance = new Todo(req.body);
        const response = await todoInstance.add();
        return  res.json({
            success: true,
            toDo: req.body.name,
        });
    },

    editTodo: async (req, res) => {
        const todoInstance = new Todo(req.body);
        const response = await todoInstance.edit();
        return  res.json({
            success: true,
            id: req.body.id,
            name: req.body.name,
        });
    },

    removeTodo: async (req, res) => {
        const todoInstance = new Todo(req.body);
        const response = await todoInstance.remove();
        return  res.json({
            success: true,
            id: req.body.id,
        });
    },
}

module.exports = {
    output,
    process,
};