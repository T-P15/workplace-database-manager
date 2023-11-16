const db = require('./connection.js')

function showTable(){
    db.promise().query(`SELECT * FROM department`)
    .then(([rows]) => {
       console.table(rows);

   })};

   
module.exports = showTable



