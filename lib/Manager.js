const Employee = require('./Employee')

class Manager extends Employee {
  constructor(name, id, email, officeId){
    super(name, id, email);
    this.officeId = officeId;
    // this.questions.push(uniqueQuestion);
  }

  getOfficeId() {
    return this.officeId
  }

  getRole(){
    return 'Manager';
  }
}

// const uniqueQuestion = {
//   type: 'input',
//   name: 'officeId',
//   message: "What is this employeee's office ID? (Required)",
//   validate: officeIdInput => {
//     if (officeIdInput%1 == 0) {
//       return true;
//     } 
//     else {
//       console.log('Please enter their office ID');
//       return false;
//     }
//   }
// }
module.exports = Manager;


// unique to manager: office number, getRole(returns 'manager') overriden return value