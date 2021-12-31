const inquirer = require('inquirer')
const fs = require("fs")
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/generateHTML.js')

let teamArray = [];

const employeeQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is this employeee's name? (Required)",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } 
      else {
        console.log('Please enter their name');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "What is this employee's ID number?",
    validate: idInput => {
      if (idInput%1 == 0) {
        return true;
      } 
      else {
        console.log('Please enter an ID number');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is this employee's e-mail?",
    validate: emailInput => {
      if (emailInput) {
        return true;
      } 
      else {
        console.log('Please enter an e-mail');
        return false;
      }
    }
  }
];

const engineeerQuestion = {
  type: 'input',
  name: 'github',
  message: "What is this employeee's Github username? (Required)",
  validate: githubIdInput => {
    if (githubIdInput) {
      return true;
    } 
    else {
      console.log('Please enter their Github username');
      return false;
    }
  }
}

const internQuestion = {
  type: 'input',
  name: 'school',
  message: "What is this employeee's school? (Required)",
  validate: officeIdInput => {
    if (officeIdInput) {
      return true;
    } 
    else {
      console.log('Please enter their school');
      return false;
    }
  }
}

const managerQuestion = {
  type: 'input',
  name: 'officeId',
  message: "What is this employeee's office ID? (Required)",
  validate: officeIdInput => {
    if (officeIdInput%1 == 0) {
      return true;
    } 
    else {
      console.log('Please enter their office ID');
      return false;
    }
  }
}


const addManager = () => {
  // use inquirer to gather manager details (name, id, email, officeId)
  employeeQuestions.push(managerQuestion);
  return inquirer.prompt(employeeQuestions)
    .then(input => {
      const {name, id, email, officeId} = input;
      const manager = new Manager(name, id, email, officeId)
    })
}


// Create a function to write HTML file
const writeToFile = data => {
  //write generated README into folder "dist"
  fs.writeFile('./dist/index.html', generateHTML(data), function(err) {     
    if (err) throw err;
    // if no error
    console.log("Data is written to file successfully.")
  });
}

addManager()
    // .then(addEmployee)
    .then(data => {
      console.log(data)
      console.log(teamArray)
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeToFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });


// GIVEN a command-line application that accepts user input:

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// Create base class for employee data (name, employee ID, email address)
// base functions: getName() getId() getEmail() getRole(returns 'employee')

// unique to manager: office number, getRole(returns 'manager') overriden return value

// unique to engineer: github username, getGithub(), getRole(returns 'engineer') overriden return value

// unique to intern: school, getSchool(), getRole(returns 'intern') overriden return value

// use inquirer to promt questions and obtain data
// use jest for testing

