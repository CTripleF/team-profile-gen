const { test } = require('picomatch');
const Engineer = require('../lib/Engineer.js')

test('create new engineer object', () => {
  const engineer = new Engineer('Tony', 50, 'test@email.com', 'TStark');

  expect(engineer.name).toBe('Tony');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

test('get role identifier', () =>{
  const employee = new Employee('Tony', 50, 'test@email.com');

  expect(employee.getRole()).toBe('engineer')
})