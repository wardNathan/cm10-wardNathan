const generateTeam = (team) => {
    const generateManager = function (manager) {
        return `
        <div id="card">
            <h2>Manager: ${manager.name}</h4>
            <div id="content">
                <p>Id: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office: ${manager.officeNumber}</p>
            </div>
        </div>
        `
    };


    const generateEngineer = function (engineer) {
        return `
    <div id="card">
        <h2>Engineer: ${engineer.name}</h4>
        <div id="content">
            <p>Id: ${engineer.id}</p>
            <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p>GitHub: ${engineer.github}</p>
        </div>
    </div>
    `
    }

    const generateIntern = function (intern) {
        return `
    <div id="card">
        <h2>Intern: ${intern.name}</h4>
        <div id="content">
            <p>Id: ${intern.id}</p>
            <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p>School: ${intern.school}</p>
        </div>
    </div>
    `
    }

    html = [];
    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)));
    html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)).join(""));
    html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern)).join(""))
    return html.join("");
}


const generateWholeTeam = (team) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>team profile generator</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <div id="employees">
        ${generateTeam(team)}
    </div>
</body>
</html>`

module.exports = generateWholeTeam;