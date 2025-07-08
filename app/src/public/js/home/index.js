"use strict";


const toDo = document.querySelector("#todoInput"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", listAdd)

// 엔터 누르면
// function keyCodeCheck () {
//     if (window.event.keyCode === 13) {

//     }
// }

// 버튼 누르면
function listAdd() {
    const req = {
        toDo: toDo.value,  
    };

    fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => console.log(res));
};