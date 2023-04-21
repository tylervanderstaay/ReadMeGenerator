function renderLicenseBadge(license) {
  if (license === null){
    license ="";
  } else {
    return `[![license: ${license}](https://img.shields.io/badge/license-${license}-blue)](https://opensource.org/licenses/${license}/)`
  }
}
function renderLicenseSection(license) {if (license === null){
  license ="";
} else {
  return `## License`
}}
 
function renderGithubUrl(username) {
  return `[username: ${username}](https://github.com/${username})`}



function generateMarkdown({Title,Description,Installation,Usage,Contribution,Test,Credits,license,username,Email}) {
  return `# ${Title}
  ${renderLicenseBadge(license)}
  ## Description
  
  ${Description}

  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits) 
  - [Contribution](#contribution)
  - [License](#License)
  - [Test](#test)
  - [Questions](#questions)
  
  ## Installation
  
  ${Installation}
  
  ## Usage
  
  ${Usage}

  ## Credits
  
 ${Credits}
  
  ${renderLicenseSection(license)}
  
 ${license}
  
  ## How to Contribute
  
  ${Contribution}
  
  ## Tests

  ${Test}

  ## Questions 

${renderGithubUrl(username)}
email: ${Email}
`
}

module.exports = generateMarkdown;