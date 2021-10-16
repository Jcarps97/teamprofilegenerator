const inquirer = require('inquirer');
const engineer = require("./engineer")
const intern = require("./intern")
const manager = require("./manager")

class employee {


}

function questions() {
    inquirer.prompt([
    {
        type: 'list',
        message: 'What is your position?',
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'position',
    },
    ])
    if(inquirer.prompt().choices === 'Manager'){
        manager.init()

    }
    if(inquirer.prompt().choices === 'Intern'){
        intern.init()
        
    }
    if(inquirer.prompt().choices === 'Engineer'){
        engineer.init()
        
    }
}

questions()