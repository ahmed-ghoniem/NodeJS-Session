const fs = require('fs');

console.log("START");

console.log("starting reading users file");
var usersFileContent = fs.readFileSync('users.json');
console.log("finished reading users file");

console.table(JSON.parse(usersFileContent));

console.log("starting reading departments file");

var departmentsFileContent = fs.readFileSync('departments.json');

console.log("finished reading departments file");

console.table(JSON.parse(departmentsFileContent));
console.log("END");