
await function doNow() {
    inquirer.prompt = ([
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
}


module.exports = 