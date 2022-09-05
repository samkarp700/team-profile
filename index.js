const inquirer = require('inquirer');
const fs = require('fs');
const generateEmp = require('./src/generatesite');

// employee containers
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const empArray = [];

//add a manager
const addManageremp = managerData => {
    return inquirer.prompt([
        //manager prompt questions
        {
            type: 'input', 
            name: 'name', 
            message: 'Who is the team manager?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name.");
                    return false;
                }
            }
        }, 
        {
            type: 'input', 
            name: 'id', 
            message: "Please enter the manager's ID number.",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's ID number");
                    return false;
                }
            }
        }, 
        {
            type: 'input', 
            name: 'email', 
            message: "Please enter the manager's email address.", 
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }else {
                    console.log("Please enter the manager's email address.");
                    return false;
                }
            }
        }, 
        {
            type: 'input', 
            name: 'offNumber', 
            message: "Please enter the manager's office phone number.", 
            validate: offNumber =>{
                if (offNumber) {
                    return true;
                } else {
                    console.log("Please enter the manager's office phone number.");
                    return false; 
                }
            }
        }
    ])
    //display manager data into employee array /containers
    .then(managerData => {
        const manager = new Manager (managerData.name, 
            managerData.id, 
            managerData.email, 
            managerData.offNumber);
        empArray.push(manager);
    })
    
};

//add an employee
const addTeamEmp = employeeData => {
    // if (!employeeData.empArray) {
    //     employeeData.empArray=[];
    // }
    return inquirer.prompt([

//general prompt questions
{
    type: 'list',
    name: 'role', 
    message: 'Please add a team member by selecting 1 of the roles below:',
    choices: ['Engineer', 'Intern'] 
},
{
    type: 'input',
    name: 'name', 
    message: "What is the employee's name?", 
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("Please enter the employee's name.");
            return false;
        }
    }
}, 
{
    type: 'input', 
    name: 'id', 
    message: "Please enter the employee's ID number.",
    validate: idInput => {
        if (idInput) {
            return true;
        } else {
            console.log("Please enter the employee's ID number");
            return false;
        }
    }
}, 
{
    type: 'input', 
    name: 'email', 
    message: "Please enter the employee's email address.", 
    validate: emailInput => {
        if (emailInput) {
            return true;
        }else {
            console.log("Please enter the employee's email address.");
            return false;
        }
    }
}, 
//engineer prompts
{
    type: 'input', 
    name: 'github', 
    message: "Please enter the engineer's github name.", 
    when: (answer) => answer.role === 'Engineer',
    validate: gitInput => {
        if (gitInput) {
            return true;
        } else {
            console.log("What is the Engineer's github name?");
            return false; 
        }
    }
},

//intern prompts
{
    type: 'input', 
    name: 'school', 
    message: "Where is the intern currently enrolled?", 
    when: (answer) => answer.role === 'Intern',
    validate: schoolInput => {
        if (schoolInput) {
            return true;
        } else {
            console.log("Please enter the intern's school.");
            return false;
        }
    }
},
// add or finish prompt 
{
    type: 'confirm', 
    name: 'addanotherEmployee',
    message: 'Would you like to add another member to your team?', 
    default: true
}
    ])
        .then(employeeData => {
            //engineer add
            if (employeeData.role === 'Engineer') {
                const engineer = new Engineer (employeeData.name, 
                    employeeData.id, 
                    employeeData.email, 
                    employeeData.github);
                    empArray.push(engineer);
            } else if (employeeData.role === 'Intern') {
                //use intern info to add card
                const intern = new Intern (employeeData.name, 
                    employeeData.id, 
                    employeeData.email, 
                    employeeData.school);
                    empArray.push(intern);
            }
            // add another employee prompt
            if (employeeData.addanotherEmployee) {
                return addTeamEmp(empArray);
            } else {
                return empArray;
            }
        });
};

//create html file
const generatefile = (fileContent) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if error - reject promise
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Team profile created!'
            });
        });
    });
};

//init app
addManageremp()
.then(addTeamEmp)
.then(employeeData => {
    return addTeamEmp(employeeData)
})
.then(data => {
    console.log(data);
    return generateEmp(data);
})
.then(generateNew => {
    return generatefile(generateNew);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
});


