const fs = require('fs');
const data = fs.readFileSync('./database.json',"utf8");
const conf = JSON.parse(data);

module.exports = {
    host : conf.host,
    user : conf.user,
    password : conf.password,
    port : conf.port,
    database : conf.database
};
