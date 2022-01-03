const Employee = require('./Employee')

class Intern extends Employee {
  constructor(name, id, email, school){
    super(name, id, email);
    this.school = school;
    // this.questions.push(uniqueQuestion);
  }

  getSchool(){
    return this.school;
  }

  getRole(){
    return 'Intern';
  }
}

module.exports = Intern;

// const uniqueQuestion = {
//   type: 'input',
//   name: 'school',
//   message: "What is this employeee's school? (Required)",
//   validate: officeIdInput => {
//     if (officeIdInput) {
//       return true;
//     } 
//     else {
//       console.log('Please enter their school');
//       return false;
//     }
//   }
// }

// unique to intern: school, getSchool(), getRole(returns 'intern') overriden return value