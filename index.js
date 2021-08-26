// Packages needed for application
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");

function createManager() {
    console.log("Enter your team");

    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Enter manager's name:",    
        },
        {
            type: 'input',
            name: 'managerId',
            message: "Enter the manager's id:",
            
        },
        {
           type: 'input',
           name: 'managerEmail',
           message: "Enter the manager's email", 
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "Enter the manager's office number"
        }
    ])
    .then(answers => {
        console.log('Answer:', answers);
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
    });
}

function createTeam() {

    inquirer.prompt([
        {
            type: 'list',
            name: 'teamRole',
            message: "Please select engineer or intern",
            choices: [
                "Engineer",
                "Intern",
                "No additional team members"
            ]
        }
    ]).then(selectedRole => {
        switch (selectedRole.teamRole) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
        }
    }
}