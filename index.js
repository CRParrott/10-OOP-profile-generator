// Packages needed for application
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "teampage.html");

const render = require("./src/team-template.js");

const teamMembers = [];
const idArray = [];


function appMenu() {

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
               message: "Enter the manager's email:", 
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "Enter the manager's office number:"
            }
        ]).then(answers => {
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
        console.log("Create an Engineer");
    
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
            teamMembers.push(engineer);
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
                message: "Enter intern's email"
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "Enter intern's current school"
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
    
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }
    
    createManager();

}

appMenu();
