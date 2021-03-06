
const generateManager= (employee) => {
  return `
<div class = 'col-4 mt-4'>
  <div class = 'card h-100'>
    <div class = 'card-header'>
      <h2>${employee.name}</h2>
      <h3>Manager</h3>
    </div>
    <div class = 'card-body'>
      <p id = 'id'>ID: ${employee.id}</p>
      <p id = 'email'>E-mail: <a href="mailto: ${employee.email}">${employee.email}</a></p>
      <p id = 'officeId'>Office ID: ${employee.officeId}</p>
    </div>
  </div>
</div>
  `;
}

const generateEngineer= (employee) => {
  return `
<div class = 'col-4 mt-4'>
  <div class = 'card h-100'>
    <div class = 'card-header'>
      <h2>${employee.name}</h2>
      <h3>Engineer</h3>
    </div>
    <div class = 'card-body'>
      <p id = 'id'>ID: ${employee.id}</p>
      <p id = 'email'>E-mail: <a href="mailto: ${employee.email}">${employee.email}</a></p>
      <p id = 'github'>Github: <a href="https://github/${employee.github}">${employee.github}</a></p>
    </div>
  </div>
</div>
  `;
}

const generateIntern= (employee) => {
  return `
<div class = 'col-4 mt-4'>
  <div class = 'card h-100'>
    <div class = 'card-header'>
      <h2>${employee.name}</h2>
      <h3>Intern</h3>
    </div>
    <div class = 'card-body'>
      <p id = 'id'>ID: ${employee.id}</p>
      <p id = 'email'>E-mail: <a href="mailto: ${employee.email}">${employee.email}</a></p>
      <p id = 'school'>School: ${employee.officeId}</p>
    </div>
  </div>
</div>
  `;
}


generateHTML = (teamArray) => {
  cardArray = [];
  // loop through array of employees and use getRole() to create and display the proper card
  for (let i = 0; i < teamArray.length; i++) {
    const employee = teamArray[i];
    console.log(teamArray[i]);
    const role = employee.getRole();

    if (role === 'Manager') {
      const managerCard = generateManager(employee);
      cardArray.push(managerCard);
    }

    if (role === 'Engineer') {
      const engineerCard = generateEngineer(employee);
      cardArray.push(engineerCard);
    }

    if (role === 'Intern') {
      const internCard = generateIntern(employee);
      cardArray.push(internCard);
    }
  }

const teamCards = cardArray.join('')

const generateTeam = generateTeamPage(teamCards);
return generateTeam;
}

// base template for HTML page using collected user info for card outputs
const generateTeamPage = function (employeeCards)  {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="./styles.css">
</head>
<body>
  <header>
    <nav>
      <span>Team Profile</span>
    </nav>
  </header>
  <main>
    <div class="container">
      <div class="row justify-content-center" id="team-cards">
      ${employeeCards}
    </div>
  </div>
  </main>    
</body>
</html>
  
  `;
}

module.exports = generateHTML;