// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const questions = [
    {
      name: 'title',
      message: 'What is title of your app?',
      default: 'ARMG',
    },
    {
      name: 'description',
      message: 'What is the description of your app?',
      default: 'This app generates readmes based on command prompt q/a in node',
    },
    {
      name: 'installer',
      message: 'How is your app installed?',
      default: 'This app is downloaded in .zip format',
    },
    {
      name: 'contributors',
      message: 'Who contributed to making this app?',
      default: 'DM and JJ',
    },
    {
      name: 'license',
      message: 'What license does your app have?',
      default: 'MIT',
    }
  ];

// function to write README file
function writeToFile(markdown) {
  console.log(markdown)
fs.writeFile("sampleReadme.md",markdown,function(err){
if (err) throw err
console.log('file written')
})
}

// function to initialize program
function init() { 
    inquirer
    .prompt(questions)
    .then(answers => {
      console.info(answers);
      const markdownText = generateMarkdown(answers)
      console.log(markdownText)
      writeToFile(markdownText)
    });
}

// // function call to initialize program
init();
