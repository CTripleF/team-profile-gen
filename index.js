const inquirer = require('inquirer')
const fs = require("fs")
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/generateHTML.js')

const teamArray = [];

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
      const manager = new Manager(name, id, email, officeId);
      teamArray.push(manager);
      // console.log(manager.getRole())
    })
}


const addEmployee = () => {
  console.log(`
  -----------------
  Build your team
  -----------------
  `);

  return inquirer.prompt ([
    {
      type: 'list',
      name: 'role',
      message: 'Choose your employee role from the following options.',
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the employee?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log ("You need to enter the name of the employee to continue.");
          return false;
        }
    }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the ID of the employee?",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('You need to enter the employee ID to continue.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the employee email?',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('You need to enter the employeer email to continue.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the employee github username?',
      when: (input) => input.role === 'Engineer',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log ('You need to enter the employee github username to continue.');
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "What is the name of the intern's school?",
      when: (input) => input.role === 'Intern',
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log ("You need to enter the intern school to continue.")
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add another team memeber?',
      default: false
    }
  ])
  //after base confirming addition of new employee use role of intern or engineer in the first question to as for proper unique values
  //then add the new employee to the team array to pass along to generateHTML()
  .then(function(employeeData){
    let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
    let employee;

    if (role === 'Engineer') {
      employee = new Engineer (name, id, email, github);

      console.log(employee);
    } else if (role === 'Intern') {
      employee =new Intern (name, id, email, school);
      console.log(employee);
    }
    teamArray.push(employee);

    if(confirmAddEmployee) {
      return addEmployee(teamArray);
    } else {
      return teamArray;
    }
  })
}


// Create a function to write HTML file
const writeToFile = data => {
  //write generated Rindex.html into folder "dist"
  fs.writeFile('./dist/index.html', data, function(err) {     
    if (err) throw err;
    // if no error
    console.log("Data is written to file successfully.")
  });
}

addManager()
  .then(addEmployee)
  .then( teamArray => {
    // console.log(data)
    // console.log(teamArray)
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

