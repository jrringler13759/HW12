const db = require("./connectDB");
const inquirer = require("inquirer");
const util = require("util");

db.query = util.promisify(db.query);


async function updateEmplRole() {
    let allRoles = await db.query("SELECT id, title FROM emplRole");
    let rolesArr = allRoles.map(role => {
        return {
            name: role.title,
            value: role.id
        }
    });
    let allEmpl = await db.query("SELECT id, first_name, last_name FROM allEmpl");
    let emplArr = allEmpl.map(empl => {
        return {
            name: empl.first_name+ " " +empl.last_name,
            value: empl.id
        }
    });
   
    const answers = await inquirer.prompt([
         {
             type: "list",
             name: "chooseEmpl",
             message: "What employee would you like to update?",
             choices: emplArr
         },
         {
            type: "list",
            name: "roleDept",
            message: "What role would you like to assign to the selected employee?",
            choices: rolesArr
        }
    ]);
    updateRole(answers);
}

//insert role into database
async function updateRole (answers) {
console.log("Updateing the role of an employee...\n");
  return db.query("UPDATE allEmpl SET role_ID=? WHERE id=?",
    [
      answers.roleDept,
      answers.chooseEmpl
    ]
  );
}


exports.updateEmplRole = updateEmplRole;
