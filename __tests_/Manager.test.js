const Manager = require('../lib/Manager.js');

test('creates a container for Manager info', () => {
//must inherit from Employee info + office number
const manager = new  Manager('Ralph', 2, 'ralph@email.com', '555-5555');

 //expect team manager name
 expect(manager.name).toEqual(expect.any(String));
 //expect employee ID
 expect(manager.id).toEqual(expect.any(Number));
 //expect email address
 expect(manager.email).toEqual(expect.any(String));
 //expect office number as string
 expect(manager.offNumber).toEqual(expect.any(String));

 console.log(`Manager Name: ${manager.name}`);
 console.log(`Manager ID: ${manager.id}`);
 console.log(`Manager Email: ${manager.email}`);
 console.log(`Manager Office Number: ${manager.offNumber}`);
});

