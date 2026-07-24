-- ==========================================
-- CREATE DATABASE
-- ==========================================

CREATE DATABASE company;
USE company;

-- ==========================================
-- CATEGORY
-- ==========================================

CREATE TABLE category (
    category_id INT PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO category VALUES
(1,'Electronics'),
(2,'Furniture'),
(3,'Sports'),
(4,'Clothing');

-- ==========================================
-- PRODUCT
-- ==========================================

CREATE TABLE product (
    product_id INT PRIMARY KEY,
    name VARCHAR(100),
    category_id INT,
    sale_price DECIMAL(10,2),
    FOREIGN KEY (category_id) REFERENCES category(category_id)
);

INSERT INTO product VALUES
(101,'Laptop',1,150000),
(102,'Mouse',1,25000),
(103,'Keyboard',1,35000),
(104,'Desk',2,180000),
(105,'Chair',2,90000),
(106,'Football',3,40000),
(107,'T-Shirt',4,30000),
(108,'Monitor',1,220000);

-- ==========================================
-- SUPPLIER
-- ==========================================

CREATE TABLE supplier (
    supplier_id INT PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO supplier VALUES
(1,'TechWorld'),
(2,'HomeCenter'),
(3,'SportMax');

-- ==========================================
-- PRODUCT_SUPPLIER
-- ==========================================

CREATE TABLE product_supplier (
    supplier_id INT,
    product_id INT,
    PRIMARY KEY (supplier_id, product_id),
    FOREIGN KEY (supplier_id) REFERENCES supplier(supplier_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);

INSERT INTO product_supplier VALUES
(1,101),
(1,102),
(1,103),
(1,104),
(1,108),
(2,104),
(2,105),
(2,107),
(3,106),
(3,107);

-- ==========================================
-- SALESPERSON
-- ==========================================

CREATE TABLE salesperson (
    salesperson_id INT PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO salesperson VALUES
(1,'John'),
(2,'Emma'),
(3,'Lucas');

-- ==========================================
-- CUSTOMER
-- ==========================================

CREATE TABLE customer (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO customer VALUES
(1,'Alice'),
(2,'Bob'),
(3,'Charlie'),
(4,'Sophia');

-- ==========================================
-- ORDERS
-- ==========================================

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    salesperson_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
    FOREIGN KEY (salesperson_id) REFERENCES salesperson(salesperson_id)
);

INSERT INTO orders VALUES
(1,1,1,'2026-01-10'),
(2,2,1,'2026-02-15'),
(3,3,2,'2026-03-20'),
(4,4,3,'2026-04-05');

-- ==========================================
-- ORDER_DETAIL
-- ==========================================

CREATE TABLE order_detail (
    detail_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    unit_price DECIMAL(10,2),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);

INSERT INTO order_detail VALUES
(1,1,101,2,150000),
(2,1,102,10,25000),
(3,2,108,1,220000),
(4,2,104,2,180000),
(5,3,105,5,90000),
(6,3,106,20,40000),
(7,4,107,200,30000),
(8,4,103,50,35000);

-- ==========================================
-- WAREHOUSE
-- ==========================================

CREATE TABLE warehouse (
    warehouse_id INT PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO warehouse VALUES
(1,'North Warehouse'),
(2,'South Warehouse'),
(3,'Central Warehouse');

-- ==========================================
-- WAREHOUSE_STOCK
-- ==========================================

CREATE TABLE warehouse_stock (
    warehouse_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (warehouse_id, product_id),
    FOREIGN KEY (warehouse_id) REFERENCES warehouse(warehouse_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);

INSERT INTO warehouse_stock VALUES
(1,101,100),
(1,102,250),
(1,103,300),
(1,108,250),
(2,104,500),
(2,105,200),
(2,107,100),
(3,106,900),
(3,107,250),
(3,108,100);

-- ==========================================
-- VIEW THE TABLES
-- ==========================================

SELECT * FROM category;
SELECT * FROM product;
SELECT * FROM supplier;
SELECT * FROM product_supplier;
SELECT * FROM salesperson;
SELECT * FROM customer;
SELECT * FROM orders;
SELECT * FROM order_detail;
SELECT * FROM warehouse;
SELECT * FROM warehouse_stock;

SELECT supplier_id
FROM supplier

SELECT p.name, s.supplier_id 
FROM product p, supplier s
WHERE p.product_id = s.product_id