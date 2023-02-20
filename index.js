const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions');
const SVG = require('./lib/svg')
const { Square, Triangle, Circle } = require("./lib/shapes");



inquirer
    .prompt(questions)
    .then((response) => {
   
        fs.writeFile(`${response.text}.svg`, genSVG(response), (err) => {
            if (err) throw err;
            console.log("Your new SVG file was created!");
        })

    })

function genSVG(response) {
    if (response.shape === "square") {
        const svg= new SVG();
        svg.setText(response.text, response.color);
        const newSquare = new Square();
        newSquare.setColor(response.shapeColor);
        svg.setShape(newSquare);
        return svg.render();
    } else if (response.shape === "triangle") {
        const svg= new SVG();
        svg.setText(response.text, response.color);
        const newTriangle = new Triangle();
        newTriangle.setColor(response.shapeColor);
        svg.setShape(newTriangle);
        return svg.render();
    } else {
        const svg= new SVG();
        svg.setText(response.text, response.color);
        const newCircle = new Circle();
        newCircle.setColor(response.shapeColor);
        svg.setShape(newCircle);
        return svg.render();
    }
}
