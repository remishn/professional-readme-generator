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
        message: 'provide a description of the project (Required)',
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
        name: 'installation',
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
        name: 'usage',
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
        type: 'input',
        name: 'credits',
        message: 'list your collaborators with links to their GitHub profiles:',
        defalult: false
      },

      {
        type: 'list',
        name: 'license',
        choices: ['Apache','MIT', 'Mozila'],
        defalult: 'Apache'

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
  const readme = generateMarkdown(answers)
  writeToFile('generated_readme.md', readme)
}

// Function call to initialize app
init();
