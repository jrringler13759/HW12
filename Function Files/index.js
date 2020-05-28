var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "bootcamp2020",
  database: "employees_db"
});

connection.connect(function(err) {
  if (err) throw err;

});


inquirer.prompt ([
  {
      type: "list",
      name: "doNow",
      message: "What would you like to do now?",
      choices: ["View all Employees", 
              "View all Roles", 
              "View all Departments", 
              "Add an Employee", 
              "Add a Role", 
              "Add a department", 
              "Update Role"]
  }
])

