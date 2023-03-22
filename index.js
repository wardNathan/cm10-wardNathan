const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown');
const Manager = require('./employees/manager');
const Engineer = require('./employees/engineer');
const Intern = require('./employees/intern');

const employees = [];

function addManager() {
    inquirer.createPromptModule([
        {
            type: 'input',
            name: 'name',
            message: "Enter the manager's name",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's ID",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number"
        },
    ])
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            team.push(manager);
            newEmployee();
        })
}

function addEmployee() {
    inquirer .prompt ([
        {
            type: 'list',
            name: 'question',
            message: 'Add new employee?',
            choices: ['No other employees', 'Add engineer','Add intern']
        },
    ])
    .then ((data) => {
        if (data.question === 'Add engineer') {
            addEngineer();
        } else if (data.question === 'Add intern') {
            addIntern()
        }

    })
}

function addEngineer() {
    inquirer.createPromptModule([
        {
            type: 'input',
            name: 'name',
            message: "Enter the engineers name",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the engineers ID",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the engineers email",
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the engineers GitHub"
        },
    ])
        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.officeNumber);
            team.push(engineer);
            newEmployee();
        })
}

function addIntern() {
    inquirer.createPromptModule([
        {
            type: 'input',
            name: 'name',
            message: "Enter the intern's name",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the intern's ID",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the intern's email",
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school"
        },
    ])
        .then((data) => {
            const intern = new Intern(data.name, data.id, data.email, data.officeNumber);
            team.push(intern);
            newEmployee();
        })
}