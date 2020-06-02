
const inquirer = require("inquirer");

const add = require("./add");
const query = require("./query");
const update = require("./update");


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
        "Add a Department",
        "Update Role and Manager",
        "Exit"
      ]
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
      console.log("Test");
      await add.addDept();
      console.log("A department has been added.");
      doNow();
      break;
    case "View all Employees":
      await query.viewEmpl();
      console.log("Viewing all Employees");
      doNow();
      break;
    case "View all Roles":
      await query.viewRole();
      console.log("Viewing all Roles");
      doNow();
      break;
    case "View all Departments":
      await query.viewDept();
      console.log("A department has been added.");
      doNow();
      break;
    // case "Update Employee Manager":
    //   await add.addDept();
    //   console.log("A department has been added.");
    //   doNow();
    //   break;
    case "Update Role and Manager":
      await update.updateEmplRole();
      console.log("The role has been updated..");
      doNow();
      break;
    // case "Update a Department":
    //   await add.addDept();
    //   console.log("A department has been added.");
    //   doNow();
    //   break;
    case "Exit": {
      exitLoop = true;
      process.exit(0); // successful exit
    }
  }
}



