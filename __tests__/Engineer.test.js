const Engineer = require('../lib/Engineer.js')

test('create new engineer object', () => {
  const engineer = new Engineer('Tony', 50, 'test@email.com', 'TStark');

  expect(engineer.name).toBe('Tony');
  expect(engineer.id).toEqual(50);
  expect(engineer.email).toBe('test@email.com');
  expect(engineer.github).toBe('TStark');
});

// test getGithub()
test('get Github username',()=>{
  const employee = new Engineer('Tony', 50, 'test@email.com', 'TStark');

  expect(employee.getGithub()).toBe('TStark');
})

//test getRole()
test('get role identifier', () =>{
  const employee = new Engineer('Tony', 50, 'test@email.com', 'TStark');

  expect(employee.getRole()).toBe('Engineer')
})