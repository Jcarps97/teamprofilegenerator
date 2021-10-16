const inquirer = require("inquirer")
const engineer = require("./engineer")
const intern = require("./intern")
const manager = require("./manager")


//Base questions
const questionsAll = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'What is your position?',
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'position',
    },
]

//Role specific questions
const questionManager = [
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'office',
    },
]

const questionEngineer = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
]

const questionIntern = [
    {
        type: 'input',
        message: 'What is your school?',
        name: 'school',
    },
]

//Base function
function init() {
    inquirer.prompt(questionsAll)
    .then(response => {
        name = response.name;
        id = response.id;
        email = response.email;
    if(questionsAll.role === 'manager') {
        inquirer.prompt(questionManager)
    }
    else if(questionsAll.role === 'engineer'){
        inquirer.prompt(questionEngineer)
    }
    else if(questionsAll.role === 'intern'){
        inquirer.prompt(questionIntern)
    }
    });
}

init()
