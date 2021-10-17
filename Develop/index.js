const inquirer = require("inquirer")
const fs = require("fs");
const Engineer = require("./library/engineer")
const Intern = require("./library/intern")
const Manager = require("./library/manager")


//Employee array
managerArray = []
engineerArray = []
internArray = []


//Base questions
const initQuestion = 
    {
        type: 'confirm',
        message: 'Do you want to add an employee?',
        name: 'initial',
    }
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
function createHTML(response, data){
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
    ${createManager()}
    <section>
    <section>
    ${createEngineer()}
    <section>
    <section>
    ${createIntern()}
    <section>
</body>
</html>`
fs.writeFile('index.html', html ,function(err){
    if (err) {
        console.log(err)
    };
    })

}

function createManager() {
    const managerarray2 = ""
    for (let i = 0; i < managerArray.length; i++){
        managerarray2 += `<header>
        <h2>${managerArray.name}</h2>
        <h3>${managerArray.position}</h3>
        </header>
        <main>
        <p>${managerArray.id}</p>
        <p href="mailto:${managerArray.email}">${managerArray.email}</p>
        <p>${managerArray.data.office}</p>
        </main>`
    }
return managerarray2
}

function createEngineer() {
    const engineerarray2 = ""
    for (let i = 0; i < engineerArray.length; i++){
        engineerarray2 += `<header>
        <h2>${engineerArray.name}</h2>
        <h3>${engineerArray.position}</h3>
        </header>
        <main>
        <p>${engineerArray.id}</p>
        <p href="mailto:${engineerArray.email}">${engineerArray.email}</p>
        <p href="https://github.com/${engineerArray.data.github}">${engineerArray.data.github}</p>
        </main>`
    }
    return engineerarray2
}

function createIntern() {
    const internarray2 = ""
    for (let i = 0; i < internArray.length; i++){
        internarray2 += `<header>
        <h2>${internArray.name}</h2>
        <h3>${internArray.position}</h3>
        </header>
        <main>
        <p>${internArray.id}</p>
        <p href="mailto:${internArray.email}">${internArray.email}</p>
        <p>${internArray.data.school}</p>
        </main>`
    }
    return internarray2
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
            .then(function(data){
                // console.log(data, response)
                const testManager = new Manager(name, id, email, data.office)
                // console.log(testManager)
                managerArray.push(testManager)
                // console.log(managerArray)
                addEmployee()
            })
        }
        else if(response.position === 'Engineer'){
            inquirer.prompt(questionEngineer)
            .then(function(data){
                const testEngineer = new Engineer(name, id, email, data.github)
                engineerArray.push(testEngineer)
                addEmployee()
            })
        }
        else if(response.position === 'Intern'){
            inquirer.prompt(questionIntern)
            .then(function(data){
                const testIntern = new Intern(name, id, email, data.school)
                internArray.push(testIntern)
                addEmployee()
            })
        }
    });
}
function addEmployee(){
    inquirer.prompt(initQuestion)
    .then(function(answer){
    if (answer.initial === true){
        init()
    }
    else {
        createHTML()
        // return;
    }
})
}

addEmployee()

