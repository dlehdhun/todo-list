"use strict";

import { handleAddTodo } from './addTodoItem.js';
import { handleEditOrRemove } from './editRemoveItem.js';
import { handleCompleteToggle } from './toggleCompleteStyle.js';


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
            handleAddTodo(req, todoBox, toDo);
        }
    }

}

toDo.addEventListener("keydown", handleAdd);
loginBtn.addEventListener("click", handleAdd);

todoBox.addEventListener("click", handleEditOrRemove);      // 수정/삭제
todoBox.addEventListener("change", handleCompleteToggle);   // 체크완료 시 밑줄 표시