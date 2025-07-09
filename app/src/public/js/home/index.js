"use strict";

import { add } from './addTodoItem.js';

const toDo = document.querySelector("#todoInput"),
    loginBtn = document.querySelector("button"),
    todoBox = document.querySelector(".todo-box");

function handleAdd(event) {
    const req = {
        toDo: toDo.value,
    };
    if (event.key === "Enter" || event.type === "click") {
        if (toDo.value === "") {
            alert("값을 입력하세요!");
        } else {
            add(req, todoBox, toDo);
        }
    }
}

toDo.addEventListener("keydown", handleAdd);
loginBtn.addEventListener("click", handleAdd);