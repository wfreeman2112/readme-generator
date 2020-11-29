const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
const axios = require("axios");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },

  {
    type: "input",
    name: "description",
    message: "Describe your Project",
  },

  {
    type: "input",
    name: "installation",
    message: "How do you install it?",
  },

  {
    type: "input",
    name: "usage",
    message: "How is it used?",
  },

  {
    type: "list",
    message: "license type?",
    name: "license",
    choices: ["MIT", "Mozilla", "IBM", "unlicense"],
  },

  {
    type: "input",
    name: "contributing",
    message: "Who are the Contributors?",
  },

  {
    type: "input",
    name: "tests",
    message: "Testing Instructions?",
  },

  {
    type: "input",
    name: "username",
    message: "What is your GitHub name?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    axios
      .get("https://api.github.com/users/" + data.username)
      .then((response) => {
        data.profile = response.data.html_url;
        const readMeContent = generateMarkdown(data);
        // function to write README file
        fs.writeFile("README.md", readMeContent, (err) => {
          if (err) throw err;
          console.log("success!");
        });
      });
  });
}

// function call to initialize program
init();
