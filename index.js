// Packages needed for application
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const { fstat } = require("fs");

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
                createEngineer();
                break;
            case "Intern":
                createIntern();
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

function createIntern() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Enter intern's name"
        },
        {
            type: 'input',
            name: 'internId',
            message: "Enter intern's id"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Enter intern's name"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Enter intern's school"
        }

    ])
    .then(answers => {
        console.log('Answer', answers);
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam();
    });
}

function createTeam() {

    if (!fstat.existsSync(OUTPUT_DIR)) {
        fstat.mkdirSync(OUTPUT_DIR)
    }
    fstat.writeFileSync(outputPath, render(teamMembers), "utf-8");
}