"use strict";

import { add } from './addTodoItem.js';


const toDo = document.querySelector("#todoInput"),
    loginBtn = document.querySelector("button"),
    todoBox = document.querySelector(".todo-box");

// 취소선 표시
todoBox.addEventListener("change", (event) => {
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

// 수정 및 삭제
todoBox.addEventListener("click", (event) => {
        const editBtn = event.target.closest(".edit-btn");
    const removeBtn = event.target.closest(".delete-btn");
    if (editBtn) {
        const todoItem = editBtn.closest(".todo-item");
        const text = todoItem.querySelector(".todo-text");
        const exitText = todoItem.querySelector(".edit-input");
        const img = editBtn.querySelector("img");

        if (exitText.style.display === "none") {
            exitText.style.display = "block"
            text.style.display = "none"

            img.src = "/images/home/check-solid.svg"
            img.alt = "확인"
        } else {
            exitText.style.display = "none"
            text.style.display = "block"

            text.textContent = exitText.value; 

            img.src = "/images/home/pen-solid.svg"
            img.alt = "수정"
        }
    }
    if (removeBtn) {
        const todoItem = removeBtn.closest(".todo-item");
        todoItem.remove()
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