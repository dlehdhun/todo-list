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
        const id = todoItem.dataset.id;

        if (exitText.style.display === "none") {
            exitText.style.display = "block"
            text.style.display = "none"
            checkbox.style.display = "none";

            img.src = "/images/home/check-solid.svg"
            img.alt = "확인"
            
            const value =exitText.value;
            exitText.focus();
            exitText.value = "";
            exitText.value = value;
        } else {
            exitText.style.display = "none"
            text.style.display = "block"
            checkbox.style.display = "inline-block";

            text.textContent = exitText.value;

            img.src = "/images/home/pen-solid.svg"
            img.alt = "수정"

            const req = {
                id: id,
                name: text.textContent,
            };

            fetch(`/todos/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(req),
            })
                .then((res) => res.json())
                .then((res) => {
                    //     if (res.success) {
                    //     alert("수정 완료!");
                    // }
                })
                .catch((err) => {
                    console.error("toDo 수정, 삭제 중 에러 발생");
                });
        }
    }
    if (removeBtn) {
        const todoItem = removeBtn.closest(".todo-item");
        const id = todoItem.dataset.id;

        todoItem.remove();

        const req = {
            id: id,
        };
        
        fetch(`/todos/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req),
        })
            .then((res) => res.json())
            .then((res) => {
                // if (res.success) {
                //     alert("삭제 완료!");
                // }
            })
            .catch((err) => {
                console.error("toDo 수정, 삭제 중 에러 발생");
            });
    }
}

export { handleEditOrRemove };