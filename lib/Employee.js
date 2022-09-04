function Employee(name = '') {
    this.name = name;


    this.employeeId = Math.floor(Math.random() * 10 + 95);
    this.email = email;
    this.officeNum = Math.floor(Math.random() * 5 + 7);
}

module.exports = Employee;