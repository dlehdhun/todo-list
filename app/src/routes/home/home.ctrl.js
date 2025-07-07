"use strict";
const output = {
    home: (req, res) => {
        res.render("home/index")
    }
}

const process = {
    home: (req, res) => {
        console.log(req.body);
        // res.render("home/index")
    }
}

module.exports = {
    output,
    process,
};