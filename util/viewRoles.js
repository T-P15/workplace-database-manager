const db = require('./connection.js')

function showTable3(){
    return db.promise().query(`SELECT * FROM roles`)
    .then(([rows]) => {
       console.table(rows);
       console.log("\n");

   })};

   
module.exports = showTable3