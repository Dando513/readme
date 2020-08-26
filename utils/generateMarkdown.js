// function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title}
  
  ## Description: ##${data.description}
 
  ## Installer: ${data.installer}

  ## Contributing: ${data.contributors}

  // ##License: "\n[!(https://img.shields.io/badge/License-${data.license}-blue)]"

  `;
}

module.exports = generateMarkdown;
