const inquirer = require('inquirer');
// const express = require('express');

require('dotenv').config();
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const { Pool } = require('pg');

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

const choices = [
  "View all Employees",
  "View all Roles",
  "View all Departments",
  "Add an Employee",
  "Add a Role",
  "Add a Department",
  "Update Employee"
]

prompt([
  {
    type: 'list',
    name: 'choice',
    message: 'Where would you like to start?',
    choices: choices
  }
]).then(({ choice }) => {
  
})

function viewDepartments() {
}

function viewRoles() {
}

function viewEmployees() {
}

function addDepartment() {

};

function addRole() {

};

function addEmployee() {

};

function updateEmployee() {

};

promptUser();



  

