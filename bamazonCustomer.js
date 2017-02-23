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

});

purchase();



var purchase = function () {

    inquirer.prompt([{
        type: "input",
        name: "product",
        message: "Select a product"
    }]).then(function (data) {

        var product = data.product;

        connection.query('SELECT * from products WHERE product_name = ?', [product], function (error, results, fields) {

            inquirer.prompt([{
                type: "input",
                name: "quantity",
                message: "Select quantity"
            }]).then(function (data) {

                console.log(data.quantity);

                console.log("PRODUCT STOCK QUANTITY   " + results[0].stock_quantity);

                if (results[0].stock_quantity < parseInt(data.quantity)) {
                    console.log("Insufficient quantity!")
                    connection.end();

                } else {

                    console.log('product id  ' + results[0].id);


                    var difference = results[0].stock_quantity - (parseInt(data.quantity));

                    console.log("DIFFERENCE" + difference);
                    console.log("DATA PRODUCT " + results[0].product_name)
                    
                    connection.query("UPDATE products SET stock_quantity = ? WHERE product_name = ?", [difference, results[0].product_name], function (err, res) {
                        if (err) console.log('error: ' + err);
                        console.log("PRODUCTS TABLE UPDATED");

                        // return(res);

                        console.log("DATA PURCHASE  " + results[0].id);
                        // console.log(NOW());
                        connection.query("INSERT INTO sales SET ?", {
                            product_id: results[0].id,
                            quantity_purchased: parseInt(data.quantity),
                            created_at: "NOW()"
                        }, function (err, res) {
                            console.log('SALES TABLE UPDATED!')
                            connection.end();
                        });
                    });


                }


            });

        });


    });

};