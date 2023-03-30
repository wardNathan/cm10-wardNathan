const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateMarkdown.js');
const Manager = require('./employees/manager.js');
const Engineer = require('./employees/engineer.js');
const Intern = require('./employees/intern.js');

const team = [];

function addManager() {
    inquirer .prompt([
    {
        type: 'input',
        name: 'name',
        message: "Enter the manager's name.",
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the manager's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the manager's email.",
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the manager's office number.",
    }
    ])
    .then ((data) => {

        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        team.push(manager);
        addEmployee();

    })
}

function addEmployee() {
    inquirer .prompt ([
        {
            type: 'list',
            name: 'question',
            message: 'Add another employee?',
            choices: ['Engineer', 'Intern', "Finished"]
        },
    ])
    .then ((data) => {
        if (data.question === 'Engineer') {
            addEngineer();
        } else if (data.question === 'Intern') {
            addIntern();
        } else {
            fs.writeFile('./dist/index.html', generateHTML(team), (err) =>
            err ? console.log(err) : console.log('Your employees have been generated in the index.html in the dist folder.'))
        }
    })
}

function addEngineer() {
    inquirer .prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Enter the engineer's name.",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the engineer's id.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the engineer's email.",
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Enter the engineer's GitHub",
        }
    ])
    .then ((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.gitHub);
        team.push(engineer);
        addEmployee();
    })
}

function addIntern() {
    inquirer .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the intern's name.",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the intern's id.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the intern's email.",
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school.",
        }
    ])
    .then ((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        team.push(intern);
        addEmployee();
    })
}
function init() {
    addManager()
}

init();