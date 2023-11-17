const questions = require("./util/questions")
const viewDepartments = require('./util/viewDepartments')
const viewEmployees = require('./util/viewEmployees')
const viewRoles = require('./util/viewRoles')
const inquirer = require("inquirer")
const db = require('./util/connection')

function menu(){
    console.log("\n");
inquirer.prompt(questions)
    .then((answers) => {
        switch(answers.action){
            case "View departments?": 
            viewDept();
            break;

            case "View roles?": 
            viewR();
            break;

            case "View employees?": 
            viewEmp();
            break;

            case "Add Department":
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'DepartmentTitle',
                        message: 'what is the title of the department?',
                    },
                ]).then((nestedAnswers) =>{
                    return db.promise().query(`INSERT INTO department (department_name) VALUES ("${nestedAnswers.DepartmentTitle}")`)
                    .then(([rows]) => {
                        console.table(rows);
                        console.log("\n");
                    })});
        };
    })
}

function viewDept(){
    viewDepartments()
        .then(()=> {menu()});
};

function viewR(){
    viewRoles()
        .then(()=> {menu()});
};

function viewEmp(){
    viewEmployees()
        .then(()=> {menu()});
};


menu();
