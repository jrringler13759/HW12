const db = require("./connectDB");
const cTable = require("console.table");


//functions to search the db for certain lists

//view all employees
async function viewEmpl () {
    let allEmpl = await db.query("SELECT e.id, e.first_name, e.last_name, emplRole.title, departments.name, emplRole.salary, concat(m.first_name, ' ' ,  m.last_name) AS manager FROM allEmpl e LEFT JOIN allEmpl m ON m.id=e.manager_ID JOIN emplRole ON emplRole.id=e.role_ID JOIN departments ON emplRole.dept_ID=departments.id ORDER BY ID ASC");
        console.log("\n");
        console.table(allEmpl);
};

//view all roles
async function viewRole () {
    let allRoles = await db.query("SELECT emplRole.id, emplRole.title, emplRole.salary, departments.name FROM emplRole LEFT JOIN departments ON emplRole.dept_ID=departments.id");
        console.log("\n");
        console.table(allRoles);
};

//view all departments
async function viewDept () {  
    let allDepts = await db.query("SELECT * FROM departments");
        console.log("\n");
        console.table(allDepts); 
};



exports.viewEmpl = viewEmpl;
exports.viewRole = viewRole;
exports.viewDept = viewDept;