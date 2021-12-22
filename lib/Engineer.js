const Employee = require('./Employee')

class Engineer extends Employee {
  constructor(name, id, email, github){
    super(name, id, email);
    this.github = github;
    this.questions.push(uniqueQuestion);
  }

  getGithub(){
    return this.github;
  }

  getRole(){
    return 'Engineer';
  }
}

const uniqueQuestion = {
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


module.exports = Engineer;

// unique to engineer: github username, getGithub(), getRole(returns 'engineer') overriden return value