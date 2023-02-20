let svgShape;
let svgText;


class SVG {
    constructor(){
    this.text = "";
    this.shape = ""; 
    }
    setText(text, color){
        if (text.length > 3){
            throw new Error('Text must not exceed 3 characters.');
        }
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape){
        this.shape = shape.render();
        // if (shape === "square") {
        //     this.shape = '<rect x="90" y="40" width="120" height="120"'
        // } else if (shape === "triangle") {
        //     this.shape = '<polygon points="150, 18 244, 182 56, 182"'
        // } else {
        //     this.shape = '<circle cx="150" cy="100" r="80"'
        // }
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}/>${this.text}</svg>`
    }

}


module.exports = SVG;