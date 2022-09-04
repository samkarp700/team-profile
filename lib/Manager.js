//import employee base info
const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, offNumber) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        super(name, id, email);
        this.offNumber = offNumber;
    }
   
}

module.exports = Manager;