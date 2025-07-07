"use strict";

const list = document.querySelector("#list"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", listAdd)

function listAdd() {
    const req = {
        list: list.value
    };
    console.log(req);
}