const inquirer = require('inquirer');
// const express = require('express');

require('dotenv').config();
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const { Pool } = require('pg');

// const PORT = process.env.PORT || 3001;
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

const pool = new Pool(
  {
    user: dbUser,
    password: dbPassword,
    database: dbName,
    host: 'localhost',
    port: 3001 
  },
  console.log(`Connected to the tracker_db database.`)
);

function promptUser() {
  try {
    const questions = inquirer.prompt([
      {
        type: 'list',
        name: 'options',
        messages: 'Please select from the following menu:',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add department',
          'Add role',
          'Add employee',
          'Update employee',
          'Quit'

        ]
      }
    ]);
    
    switch(questions.options) {
      case 'View all departments':
        viewDepartments();
        break;

      case 'View all roles':
        viewRoles();
        break;

      case 'View all employees':
        viewEmployees();
        break;

      case 'Add department':
        addDepartment();
        break;

      case 'Add roles':
        addRole();
        break;

      case 'Add employee':
        addEmployee();
        break;

      case 'Update employee':
        updateEmployee();
        break;

      case 'Quit':
        pool.end();
        break;

      default:
        console.log('Selection Error');
        break;
    }
  } catch (err) {
    console.log('Error', err);
  }
};

function viewDepartments() {
  try {
    const result = 
      pool.query(`SELECT * FROM departments`);

    console.table(result.rows);
    promptUser();

  } catch(err) {
    console.log('Error on viewing departments', err);
  }
};

function viewRoles() {
  try {
    const result =
      pool.query(`SELECT roles.title, roles.salary, departments.name 
                  FROM roles 
                  JOIN departments 
                  ON roles.department_id = departments.id`);
     
    console.table(result.rows);
    promptUser();

  } catch(err) {
    console.log('Error on viewing roles');
  }
};

function viewEmployees() {
  try {
    const result = 
    pool.query(`SELECT employees.id 
                AS employee_id, employees.first_name, employees.last_name, roles.title
                AS role_title, roles.salary, departments.name
                AS department_name, 
                CONCAT(manager.first_name, manager.last_name)
                AS manager_name FROM employees
                JOIN role ON employees.roles_id = roles.id
                JOIN departments ON roles.department_id = departments.id 
                LEFT JOIN employee AS manager ON employees.manager_id = manager.id`);
    console.table(result.rows);
    promptUser();

  } catch(err) {
    console.log('Error on viewing employees')
  }
};

function addDepartment() {};

function addRole() {};

function addEmployee() {};

function updateEmployee() {};

promptUser();




// const questions = [
//     {
        // type: 'list',
        // name: 'options',
        // message: 'Please select from the following menu: ',
        // choices: [
        //     'View all departments', 
        //     'View all roles', 
        //     'View all employees', 
        //     'Add department', 
        //     'Add roll;', 
        //     'Add employee', 
        //     'Update employee',  
        //     'Quit'
        // ]
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



  

