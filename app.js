const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const teamArr = [];
getRole()

function generateHTML(){
    console.log(teamArr);
    fs.writeFileSync(outputPath, render(teamArr)), function(){
        console.log("html file generated")
    }
}

//Question prompts for creating Team
function getRole() {
    inquirer.prompt([
            {
                type: "list",
                name: "teamRole",
                message: "What is your team member's role?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "Finished"
                ]
            }]) .then(answers => {
                if (answers.teamRole === "Manager") {
                    managerInfo()
                } else if (answers.teamRole === "Engineer") {
                    engineerInfo()
                } else if (answers.teamRole === "Intern") {
                    internInfo()
                } else if (answers.teamRole === "Finished") {
                   generateHTML()
                }
            })
        
};

function engineerInfo() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What's your team member's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your team member's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your team member's email?"
        },
        {
            type: "input",
            name: "gitHub",
            message: "What is your Engineer's GitHub username?"
        }
        ]).then(function(userResponse){
            var myEngineer = new Engineer(userResponse.name, userResponse.id, userResponse.email, userResponse.gitHub);
            teamArr.push(myEngineer);
            getRole()
        })
}

function managerInfo() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What's your team member's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your team member's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your team member's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your manager's office number?"
        }
        ]).then(function(userResponse){
            var myManager = new Manager(userResponse.name, userResponse.id, userResponse.email, userResponse.officeNumber);
            teamArr.push(myManager);
            getRole()
        })
}

function internInfo() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What's your team member's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your team member's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your team member's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school?"
        }
        ]).then(function(userResponse){
            var myIntern = new Intern(userResponse.name, userResponse.id, userResponse.email, userResponse.school);
            teamArr.push(myIntern);
            getRole()
        })
}