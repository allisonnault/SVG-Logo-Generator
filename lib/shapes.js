const SVG = require('./svg')

class Square extends SVG {
    constructor(text, color, shapeColor) {
        super(text, color);
        this.shapeColor = shapeColor;
    }
    setColor(){

    }
}

class Circle extends SVG {
    constructor(text, color, shapeColor) {
        super(text, color);
        this.shapeColor = shapeColor;
    }
    setColor(){

    }
}

class Triangle extends SVG {
    constructor(text, color, shapeColor) {
        super(text, color);
        this.shapeColor = shapeColor;
    }
    setColor(){
        
    }
}

module.exports = { Square, Circle, Triangle };