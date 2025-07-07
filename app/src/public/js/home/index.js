"use strict";

const { json, application } = require("express");

const list = document.querySelector("#list"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", listAdd)

function listAdd() {
    const req = {
        list: list.value
    };

    fetch("/index", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
}