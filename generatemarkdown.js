// function to generate markdown for README
function generateMarkdown(data) {
 return `# ${data.title}

 ## Description 
 

 
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
 

 
 
 ## Usage 
 

 
 ## License
 
 
 
 
 ---
 

 
 ## Badges
 
 ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
 ## Contributing
 

 
 ## Tests
 

 
 ## Questions

 

 
 
  `;
  }
  
  module.exports = generateMarkdown;
  