let svgShape;
let svgText;
let svg;

class SVG {
    constructor(text, color, shape){
        if (text.length > 3){
            throw new Error('Text must not exceed 3 characters.');
        }
    this.text = text;
    this.color = color;
    this.shape = shape; 
    }
    setText(text, color){
        svgText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`
    }
    setShape(shape){
        if (shape === "square") {
            svgShape = '<rect x="90" y="40" width="120" height="120" '
        } else if (shape === "triangle") {
            svgShape = '<polygon points="150, 18 244, 182 56, 182" '
        } else {
            svgShape = '<circle cx="25" cy="75" r="20" '
        }
    }
    render(){
        svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svgShape}/>${svgText}</svg>`
    }

}


module.exports = SVG;