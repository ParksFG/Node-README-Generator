// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }else if (license == "ISC License") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }else if (license == "GNU General Public License v3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "MIT License") {
    return `(https://choosealicense.com/licenses/mit/)`
  }else if (license == "ISC License") {
    return `(https://choosealicense.com/licenses/isc/)`
  }else if (license == "GNU General Public License v3.0") {
    return `(https://choosealicense.com/licenses/gpl-3.0/)`
  }else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ` + renderLicenseBadge(data.license) + `
  
## Description

${data.desc}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [Testing Instructions](#testing-instructions)
- [License](#license)
- [Questions](#questions)

## Installation

${data.instIns}

## Usage

${data.usage}

## Contribution Guidelines

${data.contGuide}

## Testing Instructions

${data.testIns}

## License

I am using the [${data.license}]` + renderLicenseLink(data.license) +
`

## Questions

Any questions you may have you can contact me here:
- GitHub Profile: [${data.userName}](https://github.com/${data.userName})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;


