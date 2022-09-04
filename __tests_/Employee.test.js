const Employee = require('../lib/Employee.js');

test('creates container for employee info', () => {
    const Employee = new Employee('Julie');

    //expect team manager name
    expect(employee.name).toBe('Julie');
    //expect employee ID
    expect(employee.id).toEqual(expect.any(Number));
    //expect email address
    expect(employee.email).toBe('julie@email.com');
    //expect office number
    expect(employee.offnumber).toEqual(expect.any(Number));
});

