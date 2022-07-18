const licenses = {
  Apache: {
    link: 'https://opensource.org/licenses/Apache-2.0',
    badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  },
  MIT: {
    link: 'https://opensource.org/licenses/MIT',
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  },
  Mozilla: {
    link: 'https://opensource.org/licenses/MPL-2.0',
    badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
}

// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return licenses[license].badge
}

// Create functions to display 
// desctiption
// installation
// usage
// credits
// license
function renderDescriptionSection (description) {

  return `# Description
  ${description}
  `
}

function renderInstallationSection (installation) {
  return `# Installation
  ${installation}
 
  `
}

function renderUsageSection (usage) {
  return `# Usage
  ${usage}
  `
}

function renderCreditsSection (credits) {
  return `# Credits
  ${credits}
  `
}

//  function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return licenses[license].link
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // display lisence section
  // get licence link
  const licenseLink = licenses[license].link
  // display under licence section
  return `# License
  [${license} licensed](${licenseLink}) 
  `
}

//  function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license)
  const description = renderDescriptionSection(data.description)
  const installation = renderInstallationSection(data.installation)
  const usage = renderUsageSection(data.usage)
  const credits = renderCreditsSection(data.credits)
  const licenseSection = renderLicenseSection(data.license)
  const licenseLink = renderLicenseLink(data.license)

  return `# ${data.name}

  ${licenseBadge}
  ${licenseLink}
  ${description}

  Table of contents
  =================

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ${installation}
  ${usage}
  ${credits}
  ${licenseSection}

`;
}

module.exports = generateMarkdown;
