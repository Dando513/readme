// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ![${data.license}](https://img.shields.io/badge/License-${data.license}-blue)

  ## Description: 
  
  ${data.description}
 
  ## Installer: 
  
  ${data.installer}

  ## Contributing: 
  
  ${data.contributors}

  ## License: 

  ${data.license}

  ## Testing:

\`\`\`js
  ${data.testing}
\`\`\`
  `;
}

module.exports = generateMarkdown;
