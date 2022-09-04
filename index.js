const inquirer = require('inquirer');
const fs = require('fs');

// employee containers
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//add a manager
//manager prompt questions
//display manager data into employee array /containers

//add an employee
//general prompt questions
//engineer prompts
//intern prompts
// add or finish prompt 


//create html file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('.dist/index.html', fileContent, err => {
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

//app begin 



