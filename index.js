const inquirer = require("inquirer");
const generateREADME = require("./Utilities/generatereadme");

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of this project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps to installing this project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use this project?"
    },
    {
        type: "input",
        name: "license",
        message: "What licenses are used in this project?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Name any contributors to the project."
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide any tests for your application. Also provide examples on how to run them."
    },
    {
        type: "input",
        name: "questions",
        message: "Any general Q/A about this project?"
    },
    {
        type: "input",
        name: "profile",
        message: "Please link your GitHub profile."
    },

]).then(function(data){
    generateREADME(data);
})