const fs = require('fs').promises;

async function main() {

    console.log("START");

    console.log("starting reading users file");
    var usersFileContent = await fs.readFile('users.json');
    console.log("finished reading users file");

    console.table(JSON.parse(usersFileContent));

    console.log("starting reading departments file");

    var departmentsFileContent = await fs.readFile('departments.json');

    console.log("finished reading departments file");

    console.table(JSON.parse(departmentsFileContent));
    console.log("END");
}

main();