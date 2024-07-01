const inquirer = require('inquirer');
const express = require('express');
const { default: ListPrompt } = require('inquirer/lib/prompts/list');

// Import and require Pool (node-postgres)
// We'll be creating a Connection Pool. Read up on the benefits here: https://node-postgres.com/features/pooling
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
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
//             'View all employees', 
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
  

