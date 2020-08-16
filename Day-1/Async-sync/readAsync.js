const fs = require('fs');
console.log("START");

console.log("starting reading users file");
fs.readFile('users.json', function (error, data) {
    console.log("finished reading users file");
    console.table(JSON.parse(data));
});

console.log("starting reading departments file");
fs.readFile('departments.json', function (error, data) {
    console.log("finished reading departments file");
    console.table(JSON.parse(data));
});

console.log("END");