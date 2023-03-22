const generateEmployees = (employees) => {
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
    return html.join("");
}

const generateTeam = (data) =>
`
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>
<body>
   <header>
       <h1>My Team</h1>
   </header>
   <div id="team">
       ${generateEmployees(employees)}
   </div>
</body>
</html>
`

module.exports = generateTeam;