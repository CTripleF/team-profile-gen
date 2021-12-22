const Intern = require('../lib/Intern.js')

test('create new intern object', () => {
  const intern = new Intern('Anakin', 50, 'test@email.com', 'Jedi Academy');

  expect(intern.name).toBe('Anakin');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

// ttest getRole()
test('get role identifier', () =>{
  const employee = new Intern('Anakin', 50, 'test@email.com', 'Jedi Academy');

  expect(employee.getRole()).toBe('Intern')
})