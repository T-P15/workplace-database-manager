const db = require('./connection.js')

function showTable2(){
    return db.promise().query(`SELECT * FROM employee`)
    .then(([rows]) => {
       console.table(rows);
       console.log("\n");

   })};

   
module.exports = showTable2