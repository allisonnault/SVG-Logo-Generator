const SVG = require('./svg')
let svgColor;

class Square extends SVG {
    constructor(text, color, shape, shapeColor) {
        super(text, color, shape);
        this.shapeColor = shapeColor;
    }
    setColor(){
        svgColor = `fill="${this.shapeColor}"`;
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" ${svgColor}/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`
    }
}
class Triangle extends SVG {
    constructor(text, color, shape, shapeColor) {
        super(text, color, shape);
        this.shapeColor = shapeColor;
    }
    setColor(){
        svgColor = `fill="${this.shapeColor}"`;
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" ${svgColor}/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`
    }
}

class Circle extends SVG {
    constructor(text, color, shape, shapeColor) {
        super(text, color, shape);
        this.shapeColor = shapeColor;
    }
    setColor(){
        svgColor = `fill="${this.shapeColor}"`;
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" ${svgColor}/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`
    }
}



const newSquare = new Square ("arn", 'blue', 'square', 'green');
newSquare.setColor();
console.log(newSquare.render());

module.exports = { Square, Triangle, Circle };