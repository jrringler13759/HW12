const inquirer = require("inquirer");
const db = require("./connectDB");
const cTable = require("console.table");
const util = require("util");

db.query = util.promisify(db.query);
//functions to add to the db 

// ADD EMPLOYEE
async function addEmpl() {
    let allRoles = await db.query("SELECT id, title FROM emplRole");
    let rolesArr = allRoles.map(role => {
        return {
            name: role.title,
            value: role.id
        }
    })
    let allMan = await db.query("SELECT id, first_name, last_name FROM allEmpl");
    let manArr = allMan.map(man => {
        return {
            name: man.first_name+ " " +man.last_name,
            value: man.id
        }
    })
    manArr.unshift({
        name: "This employee has no manager.", 
        value: null
    })
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is the new employee's first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the new employee's last name?"
        },
        {
            type: "list",
            name: "empRole",
            message: "What is the new employee's role?",
            choices: rolesArr
        },
        {
            type: "list",
            name: "empMan",
            message: "Who is the new employee's manager?",
            choices: manArr
        }
    ]);
    insertEmpl(answers)
}

async function insertEmpl (answers) {
//insert into database
console.log("Inserting a new employee...\n");
  return db.query(
    "INSERT INTO allEmpl SET ?",
    {
      first_name: answers.firstName,
      last_name: answers.lastName,
      role_ID: answers.empRole,
      manager_ID: answers.empMan
    }
  );
}



// ADD DEPARTMENT
async function addDept() {
    const answers = await inquirer.prompt([
         {
             type: "input",
             name: "newDept",
             message: "What is the name of the department you would like to add?"
         }
     ]);
     insertDept(answers)
 }
 
//insert department into database
async function insertDept (answers) {
 console.log("Inserting a new department...\n");
   return db.query(
     "INSERT INTO departments SET ?",
     {
       name: answers.newDept
     }
   );
 }


// ADD ROLE
async function addRole() {
    let allDept = await db.query("SELECT id, name FROM departments");
    let deptArr = allDept.map(dept => {
        return {
            name: dept.name,
            value: dept.id
        }
    })
    const answers = await inquirer.prompt([
         {
             type: "input",
             name: "newRole",
             message: "What is the name of the role you would like to add?"
         },
         {
            type: "input",
            name: "salary",
            message: "What is salary for the new role?"
        },
        {
            type: "list",
            name: "roleDept",
            message: "Which department does the role belong to?",
            choices: deptArr
        },
     ]);
     insertRole(answers)
 }

//insert role into database
async function insertRole (answers) {
 console.log("Inserting a new role...\n");
   return db.query(
     "INSERT INTO emplRole SET ?",
     {
       title: answers.newRole,
       salary: answers.salary,
       dept_ID: answers.roleDept
     }
   );
 }





exports.addEmpl = addEmpl;
exports.addDept = addDept;
exports.addRole = addRole;


