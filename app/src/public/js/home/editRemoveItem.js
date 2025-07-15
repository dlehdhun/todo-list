"use strict";

function handleEditOrRemove(event) {
    
    const editBtn = event.target.closest(".edit-btn");
    const removeBtn = event.target.closest(".delete-btn");
    if (editBtn) {
        const todoItem = editBtn.closest(".todo-item");
        const text = todoItem.querySelector(".todo-text");
        const exitText = todoItem.querySelector(".edit-input");
        const checkbox = todoItem.querySelector(".todo-check");
        const img = editBtn.querySelector("img");

        if (exitText.style.display === "none") {
            exitText.style.display = "block"
            text.style.display = "none"
            checkbox.style.display = "none";

            img.src = "/images/home/check-solid.svg"
            img.alt = "확인"
        } else {
            exitText.style.display = "none"
            text.style.display = "block"
            checkbox.style.display = "inline-block";

            text.textContent = exitText.value;

            img.src = "/images/home/pen-solid.svg"
            img.alt = "수정"

            const req = {
                toDo: exitText.value,
            };

            fetch(`/todos/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                    body: JSON.stringify(req),
                })
                    .then((res) => res.json())
                    .then((res) => console.log(res))
                    .catch((err) => {
                        console.error("toDo 수정, 삭제 중 에러 발생");
                    });
        }
    }
    if (removeBtn) {
        const todoItem = removeBtn.closest(".todo-item");
        todoItem.remove()

        fetch("/", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
                body: JSON.stringify(req),
            })
                .then((res) => res.json())
                .then((res) => {

                })
                .catch((err) => {
                    console.error("toDo 수정, 삭제 중 에러 발생");
                });
    }
}

export { handleEditOrRemove };