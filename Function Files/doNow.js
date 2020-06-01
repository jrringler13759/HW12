
const inquirer = require("inquirer");

const add = require("./add");
const query = require("./query");

doNow();
async function doNow () {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "whatToDo",
      message: "What would you like to do?",
      choices: [
        "View all Employees",
        "View all Roles",
        "View all Departments",
        "Add an Employee",
        "Add a Role",
        "Add a department",
        "Update Role"]
    }
  ]);
  doNext(answer.whatToDo);
}

async function doNext(answer) {
  //switch statement based on answer from whatToDo
  //each case calls an add or query function from the required files
  switch  (answer) {
    case "Add an Employee":
      await add.addEmpl();
      console.log("An employee has been added.");
      doNow();
      break;
    case "Add a Role":
      await add.addRole();
      console.log("A role has been added.");
      doNow();
      break;
    case "Add a Department":
      await add.addDept();
      console.log("A department has been added.");
      doNow();
      break;
    case "View all Employees":
      await add.addDept();
      console.log("A department has been added.");
      doNow();
      break;
    case "View all Roles":
      await add.addDept();
      console.log("A department has been added.");
      doNow();
      break;
    case "View all Departments":
      await add.addDept();
      console.log("A department has been added.");
      doNow();
      break;
    case "Update an Employee":
      await add.addDept();
      console.log("A department has been added.");
      doNow();
      break;
    case "Update a Role":
      await add.addDept();
      console.log("A department has been added.");
      doNow();
      break;
    case "Update a Department":
      await add.addDept();
      console.log("A department has been added.");
      doNow();
      break;
          
  }

}

