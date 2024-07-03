const inquirer = require('inquirer');
const express = require('express');
const { default: ListPrompt } = require('inquirer/lib/prompts/list');

const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const pool = new Pool(
  {
    user: 'postgres',
    password: 'globemaster',
    host: 'localhost',
    database: 'tracker_db'
  },
  console.log(`Connected to the tracker_db database.`)
)

pool.connect();

// TODO: Will need to create a separate function with a 'query' for all the "view" selections and possibly GET call



// TODO: Will need to create a separate function with a query for all the "view" selections and possibly GET call



// TODO: Will need to create a separate function with a POST function for all "add" selections



// TODO: Will need to create a separate function with a PUT function for all "update" selections



// TODO: Will need to create a separate function with a DELETE function for all "delete" selection
    // ^^All these will needs to be in a conditional with relations to prompt questions that are selected



// const questions = [
//     {
//         type: 'list',
//         name: 'options',
//         message: 'Please select from the following menu: ',
//         choices: [
//             'View all departments', 
//             'View all roles', 
//             'View all employees', 
//             'Add department', 
//             'Add roll;', 
//             'Add employee', 
//             'Update employee',  
//             'Quit'
//         ]
//     }
// ];

// function init() {
//     inquirer.prompt(questions).then((data) => {
//         console.log('Answers Here!', data);
//     })
// };
// init();

// const addDepartment = [
//     {
//         type: 'input',
//         name: 'department',
//         message: 'Please enter the name of the department that you wish to add'
//     }
// ];

// const addRole = [
//     {
//         type: 'input',
//         name: 'role',
//         message: 'Please enter the name of the role that you wish to add'
//     },
//     {
//         type: 'input',
//         name: 'salary',
//         message: 'Please enter the listed salary for the role'
//     },
//     {
//         type: 'list',
//         name: 'department',
//         message: 'Which department will this role be added to?',
//         choices: ['apple', 'peach']
//     }
// ];

// const addEmployee = [
//     {
//         type: 'input',
//         name: 'firstName',
//         message: 'Enter first name of employee'
//     },
//     {
//         type: 'input',
//         name: 'lastName',
//         message: 'Enter last name of employee'
//     },
//     {
//         type: 'list',
//         name: 'role',
//         message: 'Which role will this employee be assigned to?'
//     },
//     {
//         type: 'list',
//         name: 'manager',
//         message: "Who will be this employee's manager?",
//         choices: ['apple', 'peach']
//     }
// ];

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });



  

