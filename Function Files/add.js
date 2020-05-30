const inquirer = require("inquirer");
const db = require("./connectDB");
const cTable = require("console.table");
//functions to add to the db 

async function addEmpl() {
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
            choices: [
              "Waitress",
              "Bartender",
              "Busboy",
              "Hostess",
              "Dishwasher",
              "PrepChef",
              "FryCook",
              "GrillCook",
              "Kitchen_Manager",
              "FrontOfHouse_Manager",
              "General_Manager"
            ]
        },
    ]);
    insertEmpl(answers)
}

function insertEmpl (answers) {
//insert into database
console.log("Inserting a new employee...\n");
  var query = db.query(
    "INSERT INTO allEmpl SET ?",
    {
      first_name: answers.firstName,
      last_name: answers.lastName
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " employee inserted!\n");
    }
  );

  // logs the actual query being run
  console.log(query.sql);

}

exports.addEmpl = addEmpl;



