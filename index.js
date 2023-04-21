const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
const questions = [ 

{type:"input", 
name:"Title", 
message:"Project title?"},

{type:"input", 
name:"Description", 
message:"Describe your project."},

{type:"input", 
name:"Installation", 
message:"Paste installation instructions"},

{type:"input", 
name:"Usage", 
message:"How does this get used in the day-to-day sense."}, 

{type:"input", 
name:"Contribution", 
message:"Enter instructions for future contributions"},

{type:"input", 
name:"Credits", 
message:"List of contributors"},

{type:"list", 
name:"license", 
message:"Licenses used for this project go here.",
choices: ["MIT" ,"None", "Apache" , "GNU General Public License v3.0", 'BSD 2-Clause "Simplified"', 'BSD 3-Clause "New" or "Revised"', 'Boost Software 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License',  "BSD" , "Unlicense"] 
},

{type:"input", 
name:"Test", 
message:"Describe the testing process for this application."},

{type:"input", 
name:"username", 
message:"Please enter in you GitHub User name here"},

{type:"input", 
name:"Email", 
message:"Please enter in your email"},

]; 

function writeToFile(data) {
const fileName = "./output/README.md";
fs.writeFile(fileName,data,(err) =>
err ? console.log(err) : console.log("Success!"))
}

function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(generateMarkdown(data))
    })
}
init();