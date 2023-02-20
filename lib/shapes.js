const SVG = require('./svg')
let svgColor;

class Square {
    constructor() {
        this.shapeColor = "";
    }
    setColor(shapeColor){
        this.shapeColor = `fill="${shapeColor}"`;
    }
    render(){
        return `<rect x="90" y="40" width="120" height="120" ${this.shapeColor}/>`
    }
}
class Triangle {
    constructor() {
        this.shapeColor = "";
    }
    setColor(shapeColor){
        this.shapeColor = `fill="${shapeColor}"`;
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" ${this.shapeColor}/>`
    }
}

class Circle {
    constructor() {
        this.shapeColor = "";
    }
    setColor(shapeColor){
        this.shapeColor = `fill="${shapeColor}"`;
    }
    render(){
        return `<circle cx="150" cy="100" r="80" ${this.shapeColor}/>`
    }
}





module.exports = { Square, Triangle, Circle };