// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([

      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter project name!');
            return false;
          }
        }
      },

      {
        type: 'input',
        name: 'description',
        message: 'provide a desctipion of the purject (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true
            } else {
              console.log('You need to enter a project description!')
              return false  
            }
        }

      },
      
      {
        type: 'confirm',
        name: 'confirmAddTable',
        message: 'Would you like to add Table of Contents?',
        default: true

      },

      {
        type: 'input',
        name: 'Installation',
        message: 'Please provide the steps to install your project',
        validate: installationInput => {
           if (installationInput) {
            return true
           } else {
            console.log('Please provide the steps to install your Project!')
            return false
           }
        }
      },

      {
        type: 'input',
        name: 'Usage',
        message: 'Please provide instructions and examples for use.',
        validate: usageInput => {
            if (usageInput) {
                return true
            } else {
                console.log('Please provide instructions and examples for use.')
                return false
            }
        }

      },

      {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to list your collaborators for a "Credits" section if any?',
        default: true
      },

      {
        type: 'input',
        name: 'credits',
        message: 'list your collaborators with links to their GitHub profiles:',
        when: ({confirmAbout}) => confirmAbout
      },

      {
        type: 'list',
        name: 'license',
        choices: ['apache']

      }
])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error(err)
    }
  } )
}

// TODO: Create a function to initialize app
async function init() {
  const answers = await questions()
  console.log('*** answers ***', answers)
  const readme = generateMarkdown(answers)
  console.log('*** readme ***', readme)
  writeToFile('generated_readme.md', readme)
}

// Function call to initialize app
init();
