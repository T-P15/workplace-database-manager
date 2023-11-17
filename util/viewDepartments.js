const db = require('./connection.js')

function showTable(){
    return db.promise().query(`SELECT * FROM department`)
    .then(([rows]) => {
       console.table(rows);
       console.log("\n");
   })};

   
module.exports = showTable



