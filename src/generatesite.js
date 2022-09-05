const generateEmp = data => {
    empArray = [];

    //calls to employee types
    for (let i = 0; i <data.length; i++) {
        let employee = data[i];
        let role = employee.getRole();

        if(role === 'Manager') {
            const managerEmp = managerCard(employee);
            empArray.push(managerEmp);
        }
        if (role === 'Engineer') {
            const engineerEmp = engineerCard(employee);
            empArray.push(engineerEmp);
        }
        if (role === 'Intern') {
            const internEmp = internCard(employee);
            empArray.push(internEmp);
        }
    }

    //add to empArray
    const employeeProfile = empArray.join('');

    //display all 
    const teamProfiles = generateSite(employeeProfile);
    return teamProfiles;
};

    // manager card
    const managerCard = manager => {
        if(!manager) {
            return '';
        }
        return `<div class="col-md-4">
                    <div class="card">
                        <div class="card-header">
                        <h2>${manager.name}</h2>
                        <h3 class = "card-header">${manager.getRole()}</h3>
                             <div class="card-body">
                                <p class="card-text">ID: ${manager.id}
                                <br>
                                E-Mail: <a href="mailto:${manager.email}">${manager.email}</a>
                                <br>
                                Office Number: ${manager.offNumber}</p>
                                     
                            </div>
                        </div>
                    </div>
                </div>
                `;
    };

    // engineer card
    const engineerCard = engineer => {
        if(!engineer) {
            return '';
        }
        return `<div class="col-md-4">
                    <div class="card">
                        <div class="card-header">
                        <h2>${engineer.name}</h2>
                        <h3 class = "card-header">${engineer.getRole()}</h3>
                             <div class="card-body">
                                <p class="card-text">ID: ${engineer.id}
                                <br>
                                E-Mail: <a href="mailto:${engineer.email}">${engineer.email}</a>
                                <br>
                                GitHub: <a href="https://github.com/${engineer.gitName}" target="_blank">${engineer.gitName}</a></p>
                                     
                            </div>
                        </div>
                    </div>
                </div>
                `;
    };


    // intern card
    const internCard = intern => {
        if(!intern) {
            return '';
        }
        return `<div class="col-md-4">
                    <div class="card">
                        <div class="card-header">
                        <h2>${intern.name}</h2>
                        <h3 class = "card-header">${intern.getRole()}</h3>
                             <div class="card-body">
                                <p class="card-text">ID: ${intern.id}
                                <br>
                                E-Mail: <a href="mailto:${intern.email}">${intern.email}</a>
                                <br>
                                School: ${intern.schoolName}
                                     
                            </div>
                        </div>
                    </div>
                </div>
                `;
};


//generate index.html page
const generateSite = data => {
    return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Employee Profiles</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Employee Profiles</h1>
        <p class="lead">Check out the team!</p>
      </div>
    </div>
    
    <div class ="container text-center">
      <div class="row">
      ${data}
        </div>
    </div>`
}


module.exports = generateEmp;

