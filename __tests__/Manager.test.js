const Manager = require('../lib/Manager.js')

test('create new manager object', () => {
  const manager = new Manager('Karen', 200, 'test@email.com', 5);

  expect(manager.name).toBe('Karen');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeId).toEqual(expect.any(Number));
});