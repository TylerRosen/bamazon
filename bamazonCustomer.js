// Requires inquirer
var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bamazon_db'
});

connection.connect();

connection.query('SELECT * from products', function (error, results, fields) {
    if (error) throw error;
    console.log('Products for sale : ');

    for (i = 0; i < results.length; i++) {
        console.log(results[i].id + ". " + results[i].product_name + ": $" + results[i].price);
    };

    console.log("\n");

    inquirer.prompt([{
        type: "input",
        name: "product",
        message: "Select a product"
    }]).then(function (data) {

        var product = data.product;

        connection.query('SELECT * from products', function (error, results, fields) {

            inquirer.prompt([{
                type: "input",
                name: "quantity",
                message: "Select quantity"
            }]).then(function (data) {
                
        //         if (product.stock_quantity < data.quantity) {
        //             console.log("Insufficient quantity!")
        //         } else {
        //     connection.query("UPDATE products SET ? WHERE ?", [{
        //         stock_quantity: product.stock_quantity - data.quantity
        //     }, {
        //         id: product.id
        //     }], function(err, res) {
        //         if (err) throw err;
        //         console.log("PRODUCTS TABLE UPDATED");
        //     });

        //     connection.query("INSERT INTO " + table + " SET ?", {
        //         product_id: data.purchaseProductId,
        //         quantity_purchased: data.quantity,
        //         created_at: NOW()
        //     }, function(err, res) {
        //         console.log('SALES TABLE UPDATED!')
        //     });
        // }


            });

        });

        // if (item.stock_quantity > quantity) {
        //     console.log("Insufficient quantity!")

        // 

    });

});

connection.end();