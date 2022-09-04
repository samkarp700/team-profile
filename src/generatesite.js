const generateEmp = data => {
    empArray = [];
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
                                E-Mail: <a href="mailto:${manager.email}</a>
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
                                E-Mail: <a href="mailto:${engineer.email}</a>
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
                                E-Mail: <a href="mailto:${intern.email}</a>
                                <br>
                                School: ${intern.schoolName}
                                     
                            </div>
                        </div>
                    </div>
                </div>
                `;
};


//generate index.html page


module.exports = generateEmp;

