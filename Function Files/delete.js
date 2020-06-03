const db = require("./connectDB");
const inquirer = require("inquirer");
const util = require("util");

db.query = util.promisify(db.query);


// DELETE EMPLOYEE
async function deleteEmployee() {
    console.log("Deleting employee...\n");
    let allEmpl = await db.query("SELECT id, first_name, last_name FROM allEmpl");
    let emplArr = allEmpl.map(empl => {
        return {
            name: empl.first_name+ " " +empl.last_name,
            value: empl.id
        }
    });
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "chooseEmpl",
            message: "What employee would you like to delete?",
            choices: emplArr
        },
    ])
    deleteDBempl(answer);
}

async function deleteDBempl (answer){
    console.log("Deleting employee...\n");
    return await db.query("DELETE FROM allEmpl WHERE id= ?",
    [answer.chooseEmpl]
    );
}


// DELETE ROLE
async function deleteRole() {
    console.log("Deleting role...\n");
    let allRoles = await db.query("SELECT id, title FROM emplRole");
    let roleArr = allRoles.map(role => {
        return {
            name: role.title,
            value: role.id
        }
    })
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "chooseEmpl",
            message: "What role would you like to delete?",
            choices: roleArr
        },
    ])
    deleteDBrole(answer);
}

async function deleteDBrole (answer){
    console.log("Deleting department...\n");
    return await db.query("DELETE FROM emplRole WHERE id= ?",
    [answer.chooseEmpl]
    );
}


async function deleteDepartment() {
    console.log("Deleting employee...\n");
    let allDept = await db.query("SELECT id, name FROM departments");
    let deptArr = allDept.map(dept => {
        return {
            name: dept.name,
            value: dept.id
        }
    })
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "chooseEmpl",
            message: "What employee would you like to delete?",
            choices: deptArr
        },
    ])
    deleteDBDept(answer);
}

async function deleteDBdept (answer){
    console.log("Deleting employee...\n");
    return await db.query("DELETE FROM deparments WHERE id= ?",
    [answer.chooseEmpl]
    );
}

exports.deleteEmployee = deleteEmployee;
exports.deleteRole = deleteRole;
exports.deleteDepartment = deleteDepartment;