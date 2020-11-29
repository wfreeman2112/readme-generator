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
