const db = require("./connectDB");
const cTable = require("console.table");


//functions to search the db for certain lists

//view all employees
function viewEmpl () {
    return db.query("", function(err, res) {
        if (err) throw err;
        console.log("\n");
        console.table(res);
      });
    
}

//view all roles
function viewRole () {
    return db.query("SELECT emplRole.id, emplRole.title, emplRole.salary, departments.name FROM emplRole LEFT JOIN departments ON emplRole.dept_ID=departments.id", function(err, res) {
        if (err) throw err;
        console.log("\n");
        console.table(res);
      }); 
}

//view all departments
function viewDept () {  
    return db.query("SELECT * FROM departments", function(err, res) {
        if (err) throw err;
        console.log("\n");
        console.table(res);
      }); 
}



exports.viewEmpl = viewEmpl;
exports.viewRole = viewRole;
exports.viewDept = viewDept;