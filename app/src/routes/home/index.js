"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.post("/todo", ctrl.process.addTodo);

module.exports = router;