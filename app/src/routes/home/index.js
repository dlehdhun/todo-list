"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.post("/todo", ctrl.process.addTodo);
router.patch("/todos/:id", ctrl.process.editTodo);
router.patch("/todos/:id/check", ctrl.process.togglecheck);
router.delete("/todos/:id", ctrl.process.removeTodo);

module.exports = router;