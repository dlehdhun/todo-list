"use strict";

import { add } from './addTodoItem.js';

const toDo = document.querySelector("#todoInput"),
    loginBtn = document.querySelector("button"),
    todoBox = document.querySelector(".todo-box"),
    edit = document.querySelector("edit-btn"),
    remove = document.querySelector("delete-btn"),
    checkbox = document.querySelector(".todo-check");

// 취소선 표시
todoBox.addEventListener("change", function (event) {
    const checkbox = event.target.closest(".todo-check");
    if (checkbox) {
        const todoItem = checkbox.closest(".todo-item");
        const text = todoItem.querySelector(".todo-text");
        if (checkbox.checked) {
            text.style.textDecoration = "line-through";
            text.style.color = "#797979";
        } else {
            text.style.textDecoration = "none";
            text.style.color = "";
        }
    }
});

// 추가
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