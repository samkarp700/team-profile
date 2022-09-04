const Employee = require('../lib/Employee.js');


test('creates container for employee info', () => {
    const employee = new Employee('Julie', 123, 'julie@email.com');

    //expect team manager name
    expect(employee.name).toEqual(expect.any(String));
    //expect employee ID
    expect(employee.id).toEqual(expect.any(Number));
    //expect email address
    expect(employee.email).toEqual(expect.any(String));
    //expect office number
    //expect(employee.offnumber).toEqual(expect.any(Number));

    console.log(`Employee Name: ${employee.name}`);
    console.log(`Employee ID: ${employee.id}`);
    console.log(`Employee Email: ${employee.email}`);
});

 