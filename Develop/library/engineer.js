class engineer {
    
}

function questions() {
    inquirer.prompt([
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
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    ])
}