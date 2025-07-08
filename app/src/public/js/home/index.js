"use strict";


const toDo = document.querySelector("#todoInput"),
    loginBtn = document.querySelector("button"),
    todoBox = document.querySelector(".todo-box");



// 엔터 누르면
toDo.addEventListener('keydown', (event) => {
    const req = {
        toDo: toDo.value,
    };

    if (event.key === 'Enter' && toDo.value != "") {
         fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req),
        })
            .then((res) => res.json())
            .then((res) => {
                const html = `
                    <div class="todo-item">
                    <div class="todo-left">
                        <input type="checkbox" class="todo-check" />
                        <span class="todo-text">${res.toDo}</span>
                    </div>
                    <div class="todo-right">
                        <button class="edit-btn">
                        <img src="/images/home/pen-solid.svg" alt="수정" />
                        </button>
                        <button class="delete-btn">
                        <img src="/images/home/trash-can.svg" alt="삭제" />
                        </button>
                    </div>
                    </div>
                `
                todoBox.insertAdjacentHTML("beforeend", html);
                toDo.value = null;
            })
            .catch((err) => {
                console.error("toDo추가 중 에러 발생");
            });
    } 
    if (toDo.value === "" && event.key === 'Enter') alert("값을 입력하세요!");
});


// 버튼 누르면
loginBtn.addEventListener("click", (event) => {
    const req = {
        toDo: toDo.value,
    };
    if (toDo.value !== '') {
        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req),
        })
            .then((res) => res.json())
            .then((res) => {
                const html = `
                    <div class="todo-item">
                    <div class="todo-left">
                        <input type="checkbox" class="todo-check" />
                        <span class="todo-text">${res.toDo}</span>
                    </div>
                    <div class="todo-right">
                        <button class="edit-btn">
                        <img src="/images/home/pen-solid.svg" alt="수정" />
                        </button>
                        <button class="delete-btn">
                        <img src="/images/home/trash-can.svg" alt="삭제" />
                        </button>
                    </div>
                    </div>
                `
                todoBox.insertAdjacentHTML("beforeend", html);
                toDo.value = null;
            })
            .catch((err) => {
                console.error("toDo추가 중 에러 발생");
            });
    } 
    if (toDo.value === "" && event.type === 'click') alert("값을 입력하세요!");
});