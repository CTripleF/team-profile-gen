const Intern = require('../lib/Intern.js')

test('create new intern object', () => {
  const intern = new Intern('Anakin', 50, 'NotTheYounglings@gmail.com', 'Jedi Academy');

  expect(intern.name).toBe('Anakin');
  expect(intern.id).toEqual(50);
  expect(intern.email).toBe('NotTheYounglings@gmail.com');
  expect(intern.school).toBe('Jedi Academy');
});

//test getSchool()
test('get school name', ()=>{
  const employee = new Intern('Anakin', 50, 'NotTheYounglings@gmail.com', 'Jedi Academy');

  expect(employee.school).toBe('Jedi Academy')
})

// test getRole()
test('get role identifier', () =>{
  const employee = new Intern('Anakin', 50, 'NotTheYounglings@gmail.com', 'Jedi Academy');

  expect(employee.getRole()).toBe('Intern')
})