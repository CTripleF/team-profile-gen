const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js')

test('create new employee object', () => {
  const employee = new Employee('chad', 150, 'test@email.com');

  expect(employee.name).toBe('chad');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.name).toEqual(expect.any(String));
});

//test getName()
test('get employee name', () =>{
  const employee = new Employee('chad', 150, 'test@email.com');

  expect(employee.getName()).toEqual(expect.stringMatching(employee.name));
});

// test getId()
test('get employee ID', () =>{
  const employee = new Employee('chad', 150, 'test@email.com');

  expect(employee.getId()).toEqual(employee.id);
});

// test getEmail()
test('get employee email', () =>{
  const employee = new Employee('chad', 150, 'test@email.com');

  expect(employee.getEmail()).toEqual(expect.stringMatching(employee.email));
})

test('get role identifier', () =>{
  const employee = new Employee('chad', 150, 'test@email.com');

  expect(employee.getRole()).toBe('employee')
})
// Create base class for employee data (name, employee ID, email address)
// base functions: getName() getId() getEmail() getRole(returns 'employee')