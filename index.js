// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: "What is your project's name?",
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Enter a brief description of your project',
    },
    {
        type: 'input',
        name: 'instIns',
        message: 'Enter your installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information.',
    },
    {
        type: 'input',
        name: 'contGuide',
        message: 'Enter the contribution guidelines.',
    },
    {
        type: 'input',
        name: 'testIns',
        message: 'Enter the testing instructions.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['MIT License', 'ISC License', 'GNU General Public License v3.0'],
    },
    {
        type: 'input',
        name: 'userName',
        message: 'Enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter you Email address.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init({ projectName, desc, instIns, usage, contGuide, testIns, license, userName, email}) {

}

inquirer
    .prompt(questions)
    .then((answers) => {
        const responseString = JSON.stringify(answers)
        fs.writeFile('log.txt', responseString, (err) =>
            err ? console.error(err) : console.log('Success!')
        )
    });

// Function call to initialize app
// init();
