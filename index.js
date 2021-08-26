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
            message: "Please select engineer, intern, or no additional team members",
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
            default:
                createTeam();
        }
    });
}

function createEngineer() {
    console.log("Create and Engineer");

    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Enter engineer's name"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "Enter the engineer's id"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Enter engineer's email"
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "Enter engineer's github account"
        }
    ])
    .then(answers => {
        console.log('Answers:', answers);
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teanMembers.push(engineer);
        idArray.push(answers.engineerId);
        createTeam();
    });
}