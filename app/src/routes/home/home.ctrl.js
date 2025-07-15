"use strict";

const User = require("../../models/User");

const output = {
    home: async (req, res) => {
        const user = new User();
        const response = await user.getAllTodos();

        console.log(response.todos);  // 확인용

        if (response.success) {
            res.render("home/index", { todos: response.todos });
        } else {
            res.status(500).send("To-do 데이터를 가져오는 중 오류가 발생했습니다.");
        }
    }
};

const process = {
    home: (req, res) => {
        // const todo = new User(req.body);
        const toDo = req.body.toDo;
        return res.json({
            toDo: toDo,
        })
    }
}

module.exports = {
    output,
    process,
};