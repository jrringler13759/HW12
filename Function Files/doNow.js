
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

function doNext(answer) {
  //switch statement based on answer from whatToDo
  //each case calls an add or query function from the required files
  switch  (answer) {
    case "Add an Employee":
      add.addEmpl();
    //   break;
    // case "Add a Role":
    //   add();
    //   break;
    // case "Add a Department":
    //   add();
    //   break;
    // case "View all Employees":
    //   add();
    //   break;
    // case "View all Roles":
    //   add();
    //   break;
    // case "View all Departments":
    //   add();
    //   break;
    // case "Update an Employee":
    //   add();
    //   break;
    // case "Update a Role":
    //   add();
    //   break;
    // case "Update a Department":
    //   add();
    //   break;
          
  }

}