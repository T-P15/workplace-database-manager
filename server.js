const questions = require("./util/questions")
const viewDepartments = require('./util/viewDepartments')
const viewEmployees = require('./util/viewEmployees')
const viewRoles = require('./util/viewRoles')
const inquirer = require("inquirer")

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
