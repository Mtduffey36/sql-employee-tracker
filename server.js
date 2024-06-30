const inquirer = require('inquirer');
// const { default: ListPrompt } = require('inquirer/lib/prompts/list');


const questions = [
    {
        type: 'list',
        name: 'options',
        message: 'Please select from the following menu: ',
        choices: ['View all departments', 'View all rolls', 'view all employees', 'Add department', 'Add roll;', 'Add employee', 'Update employee']
    }
];

function init() {
    inquirer.prompt(questions).then((data) => {
        console.log('Answers Here!', data);
    })
};
init();

const addDepartment = [
    {
        type: 'input',
        name: 'department',
        message: 'Please enter the name of the department that you wish to add'
    }
];

const addRole = [
    {
        type: 'input',
        name: 'role',
        message: 'Please enter the name of the role that you wish to add'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Please enter the listed salary for the role'
    },
    {
        type: 'list',
        name: 'department',
        message: 'Which department will this role be added to?',
        choices: []
    }
];

const addEmployee = [
    {
        type: 'input',
        name: 'firstName',
        message: 'Enter first name of employee'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Enter last name of employee'
    },
    {
        type: 'list',
        name: 'role',
        message: 'Which role will this employee be assigned to?'
    },
    {
        type: 'list',
        name: 'manager',
        message: "Who will be this employee's manager?",
        choices: []
    }
];

