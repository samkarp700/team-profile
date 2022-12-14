//import employee base info 
const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitName) {
        super(name, id, email);
        this.gitName = gitName;
    }

    getRole() {
        return 'Engineer';
    };
}

module.exports = Engineer;