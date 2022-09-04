const Intern = require('../lib/Intern');

test('creates a container for Intern info', () => {
    //must inherit Employee info + school
const intern = new Intern('Callie', 4, 'callie@intern.com', 'University of Central Florida');

 //expect intern name
 expect(intern.name).toEqual(expect.any(String));
 //expect intern ID
 expect(intern.id).toEqual(expect.any(Number));
 //expect email address
 expect(intern.email).toEqual(expect.any(String));
 //expect school as string
 expect(intern.schoolName).toEqual(expect.any(String));

 console.log(`Intern Name: ${intern.name}`);
 console.log(`Intern ID: ${intern.id}`);
 console.log(`Intern Email: ${intern.email}`);
 console.log(`Intern School: ${intern.schoolName}`);
});

test('create intern role', () => {
    const intern = new Intern('Callie', 4, 'callie@intern.com', 'University of Central Florida');
    expect(intern.getRole()).toBe('Intern');
})