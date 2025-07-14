"use strict";

function handleCompleteToggle(event) {
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
}

export { handleCompleteToggle };