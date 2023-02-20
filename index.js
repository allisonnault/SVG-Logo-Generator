const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions');
const SVG = require('./lib/svg')
const { Square, Triangle, Circle } = require("./lib/shapes");



inquirer
    .prompt(questions)
    .then((response) => {
   
        fs.writeFile(`logo.svg`, genSVG(response), (err) => {
            if (err) throw err;
            console.log("Generated logo.svg");
        })

    })

function genSVG(response) {
    if (response.shape === "square") {
        const logo = new SVG();
        logo.setText(response.text, response.color);
        const newSquare = new Square();
        newSquare.setColor(response.shapeColor);
        logo.setShape(newSquare);
        return logo.render();
    } else if (response.shape === "triangle") {
        const logo = new SVG();
        logo.setText(response.text, response.color);
        const newTriangle = new Triangle();
        newTriangle.setColor(response.shapeColor);
        logo.setShape(newTriangle);
        return logo.render();
    } else {
        const logo = new SVG();
        logo.setText(response.text, response.color);
        const newCircle = new Circle();
        newCircle.setColor(response.shapeColor);
        logo.setShape(newCircle);
        return logo.render();
    }
}
