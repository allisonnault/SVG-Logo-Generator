const questions = [
    {
        type: 'input',
        message: 'Enter text (can be no more than 3 characters):',
        name: 'text',
      },
      {
        type: 'input',
        message: 'What color would you like your text to be? (keyword or hexadecimal number)',
        name: 'color',
      },
      {
        type: 'list',
        message: 'Select your shape:',
        choices: ['circle', 'triangle', 'square'],
        name: 'shape',
      },
      {
          type: 'input',
          message: 'What color would you like your shape to be? (keyword or hexadecimal number)',
          name: 'shapeColor',
        }
]

module.exports = questions;