class SVG {
    constructor(text, color){
        if (text.length > 3){
            throw new Error('Text must not exceed 3 characters.');
        }
    this.text = text;
    this.color = color; 
    }
    setText(){
    }
    render() {
    }

}


module.exports = SVG;