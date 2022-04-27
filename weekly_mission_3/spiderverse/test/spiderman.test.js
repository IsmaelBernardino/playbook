const Spiderman = require('../app/Spiderman.js')

describe("Test  for spiderman class", () => {
  test('Case 1 Dummy', () => {
    const andrew = new Spiderman('Spiderman Sony', 31, 'Andrew Garfield', 2, 'Sony')
    expect(andrew.name).toBe('Spiderman Sony');
    expect(andrew.age).toBe(31);
    expect(andrew.actor).toBe('Andrew Garfield');
    expect(andrew.movies).toBe(2);
    expect(andrew.studio).toBe('Sony');
    expect(andrew.getInfo()).toBe('Hey, I am Andrew Garfield from Sony studio')
  });
})