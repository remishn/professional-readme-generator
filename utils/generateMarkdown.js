const licenses = {
  apache: {
    link: 'https://opensource.org/licenses/Apache-2.0',
    badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return licenses[license].badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license)
  const licenseSection = renderLicenseSection(data.license)

  return `# ${data.name}

  ${licenseBadge}
  ${licenseSection}

`;
}

module.exports = generateMarkdown;
