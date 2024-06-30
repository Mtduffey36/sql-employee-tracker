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

