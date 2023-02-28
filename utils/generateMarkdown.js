// function to generate markdown for README
const renderLicenseBadge = (license) => {
  if(license !== "None") {
    return `![Github license](https://img.shield.io/badge/${license}-blue.svg)`
    return ''
  }
}

const renderLicenseLink = (license) => {
  if(license!=="None") {

    return `\n* [License](#license)\n`

  }

  return '';
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ### Description

  ${data.description}

  ### Table of contents

  *[Installation](#installation)

  *[Usage](#usage)

  ${renderLicenseLink (data.license)}

  * [Contributing](#contributing)

  *[Test] (#tests)

  *[Questions] (#questions)

  ##Installation

  To install necessary dependencies, run the following command:

  \`\`\`

  ${data.installation}

  \`\`\`

  # Usage

  ${data.usage}

  ## License

  This project is licensed under the ${data.license} license.

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, run following command:

  \`\`\`
  ${data.test}
  \`\`\`

  ### Questions

  If you have any questions about the repo open an issue or contact me directly as ${data.email}.

  You can find more of my work at [${data.github}](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;

