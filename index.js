const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions');
const { Square, Triangle, Circle } = require("./lib/shapes");
const questionInfo = [];


inquirer
    .prompt(questions)
    .then((response) => {
        questionInfo.push(response)

        fs.writeFile(`${response.text}.svg`, genSVG(response), (err) => {
            if (err) throw err;
            console.log("Your new SVG file was created!");
        })

    })

function genSVG(response) {
    if (response.shape === "square") {
        const newSVG = new Square(response.text, response.color, response.shape, response.shapeColor);
        newSVG.setColor();
        return newSVG.render();
    } else if (response.shape === "triangle") {
        const newSVG = new Triangle(response.text, response.color, response.shape, response.shapeColor);
        newSVG.setColor();
        return newSVG.render();
    } else {
        const newSVG = new Circle(response.text, response.color, response.shape, response.shapeColor);
        newSVG.setColor();
        return newSVG.render();
    }
}
