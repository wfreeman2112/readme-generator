// function to generate markdown for README
function generateMarkdown(data) {
 return `# ${data.title}

 ## Description 
 ${data.description}

 
 ## Table of Contents (Optional)
 
 If your README is very long, add a table of contents to make it easy for users to find what they need.
 
 * [Installation](#installation)
 * [Usage](#usage)
 * [Credits](#credits)
 * [License](#license)
 * [Badges](#badges)
 * [Contributing](#contributing)
 * [Tests](#tests)
 * [Questions](#questions)
 
 ## Installation
 ${data.installation}

 
 
 ## Usage 
 
${data.usage}
 
 ## License
 
 //wrote ternary operator for different licenses
 
 ${data.license === "MIT" ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : data.license ===  "Mozilla" ? "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)" : data.license === "IBM" ? "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" : "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"}

 
 ---
 

 
 ## Badges
 
 ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
 ## Contributing
 ${data.contributing}

 ## Tests
 
${data.tests}
 
 ## Questions

 Github Profile Link - ${data.profile}  <br>
 Email - ${data.email}

  `;
  }
  
  module.exports = generateMarkdown;
  