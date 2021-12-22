const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// const manager = new Manager();
// inquirer.prompt(manager.questions)
//   .then(employee =>{
//     console.log(employee.name);
//     console.log(employee.id);
//     console.log(employee.email);
//     console.log(employee.officeId);
//   });

// const intern = new Intern();
// inquirer.prompt(intern.questions)
//   .then(employee =>{
//     console.log(employee.name);
//     console.log(employee.id);
//     console.log(employee.email);
//     console.log(employee.school)
//   });

// const engineer = new Engineer();
// inquirer.prompt(engineer.questions)
//   .then(employee =>{
//     console.log(employee.name);
//     console.log(employee.id);
//     console.log(employee.email);
//     console.log(employee.github)
//   });


// inquirer
//   .prompt({
//     type: 'text',
//     name: 'name',
//     message: 'What is the name of the employee?'
//   })
//   // destructure name from the prompt object
//   .then(({ name }) => {
//     let intern = new Intern(name);

//     console.log(intern);

//     console.log(intern.getRole());
//   })





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

