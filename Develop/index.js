const inquirer = require("inquirer")
const fs = require("fs");
const engineer = require("./library/engineer")
const intern = require("./library/intern")
const manager = require("./library/manager")


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

//Write HTML
function createHTML(data){
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css"></link>
    <title>Document</title>
</head>
<body>
    <section>
        <header>
            <h2>${data.name}</h2>
            <h3>${data.position}</h3>
        </header>
        <main>
            <p>${data.id}</p>
            <p>${data.email}</p>
            <p>${data.github}</p>
            <p>${data.school}</p>
            <p>${data.office}</p>
        </main>
    <section>
</body>
</html>`
fs.writeFile('index.html',html,function(err){
    if (err) {
        console.log(err)
    };
    })

}

//Base function
function init() {
    inquirer.prompt(questionsAll)
    .then(response => {
        name = response.name;
        id = response.id;
        email = response.email;
        if(response.position === 'Manager') {
            inquirer.prompt(questionManager)
        }
        else if(response.position === 'Engineer'){
            inquirer.prompt(questionEngineer)
        }
        else if(response.position === 'Intern'){
            inquirer.prompt(questionIntern)
        }
    });
    // return data;
}

init()
// createHTML(data)