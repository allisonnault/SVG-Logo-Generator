const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions')
const questionInfo = [];


function init () {
    return inquirer
    .prompt(questions)
   
}

init()
.then((response)=>
{questionInfo.push(response)

fs.writeFile(`${response.text}.svg`, )

})


