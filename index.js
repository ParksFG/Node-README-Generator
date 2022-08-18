// Packages needed
const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMarkdown');

// Questions for README
const questions = [
    {
        type: 'input',
        name: 'title',
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
    },
];

// Writes to a markdown file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
}

// initializes app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const fileName = 'READMEtest.md';
            const data = generateMD(answers);
            writeToFile(fileName, data);
        });
}
// Function call to initialize app
init();

