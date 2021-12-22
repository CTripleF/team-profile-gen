class Employee{
  constructor (name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    this.questions = questions;
  }

  getName(){
    return this.name;
  }

  getId(){
    return this.id;
  }

  getEmail(){
    return this.email;
  }

  getRole (){
    return 'employee';
  }
}

const questions = [
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

module.exports = Employee;
// Create base class for employee data (name, employee ID, email address)
// base functions: getName() getId() getEmail() getRole(returns 'employee')