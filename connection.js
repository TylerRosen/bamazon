// var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'bamazon_db'
});

connection.connect();

console.log("Connected!")

// function selectTable(table) {
//         connection.query('SELECT * from ' + table, function(error, results, fields) {
//             if (error) throw error;
//             console.log('The solution is: ', results);
//         });
//     }

    // inquirer.prompt([{
    //     type: "input",
    //     name: "table",
    //     message: "What table do you want to select from?"
    // }]).then(function(data) {
    //     selectTable(data.table);

    //     //connection.end();
    // });

// });