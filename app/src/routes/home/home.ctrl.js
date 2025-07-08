"use strict";
const output = {
    home: (req, res) => {
        res.render("home/index")
    }
}

const process = {
    home: (req, res) => {
        const toDo = req.body.toDo;
        return res.json({
            toDo: toDo,
        })
    }
}

module.exports = {
    output,
    process,
};