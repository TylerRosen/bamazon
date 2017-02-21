    CREATE DATABASE bamazon_db;
    USE bamazon_db;

    CREATE TABLE departments (
        id INT AUTO_INCREMENT NOT NULL UNIQUE,
        department_name varchar(30) NOT NUll,
        over_head_costs INT(10) DEFAULT 0 NOT NULL,
        PRIMARY KEY(id)
    );

    CREATE TABLE products (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY UNIQUE,
    product_name VARCHAR(32) DEFAULT 0 NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id),
    price DECIMAL(5) DEFAULT 0 NOT NULL ,
    stock_quantity INT
    );

    CREATE TABLE sales (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY UNIQUE,
        product_id INT,
        FOREIGN KEY(product_id) REFERENCES products(id),
        quantity_purchased INT(10) NOT NULL,
        created_at varchar(30) NOT NULL
    );

    -- Insert a set of records.
    INSERT INTO departments (department_name) VALUES ("clothes");
    INSERT INTO departments (department_name) VALUES ("electronics");
    INSERT INTO departments (department_name) VALUES ("food");

    INSERT INTO products (product_name, department_id, price, stock_quantity) VALUES ("Jeans", "1", 40, 4);
    INSERT INTO products (product_name, department_id, price, stock_quantity) VALUES ("Shirts", "1", 30, 3);
    INSERT INTO products (product_name, department_id, price, stock_quantity) VALUES ("Socks", "1", 15, 10);
    INSERT INTO products (product_name, department_id, price, stock_quantity) VALUES ("Fruits", "2", 15, 20);
    INSERT INTO products (product_name, department_id, price, stock_quantity) VALUES ("Vegetables", "2", 15, 15);
    INSERT INTO products (product_name, department_id, price, stock_quantity) VALUES ("Candy", "2", 10, 20);
    INSERT INTO products (product_name, department_id, price, stock_quantity) VALUES ("Meat", "2", 20, 25);
    INSERT INTO products (product_name, department_id, price, stock_quantity) VALUES ("Phones", "3", 300, 5);
    INSERT INTO products (product_name, department_id, price, stock_quantity) VALUES ("Computers", "3", 500, 7);
    INSERT INTO products (product_name, department_id, price, stock_quantity) VALUES ("Tablets", "3", 400, 3);