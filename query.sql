CREATE DATABASE school_db;
USE school_db;

CREATE TABLE customers(
    CustomersID INT PRIMARY KEY,
    Name VARCHAR (100),
    Email VARCHAR (150)
);

CREATE TABLE orders (
    OrderID INT PRIMARY KEY,
    OrderDate DATE,
    CustomersID INT,
    Foreign Key (CustomersID) REFERENCES customers(CustomersID)
);

DROP TABLE orders, customers

CREATE TABLE customers(
    CustomersID INT PRIMARY KEY,
    Email VARCHAR (150) UNIQUE,
    Country VARCHAR(30) DEFAULT "Argentina"
);

CREATE TABLE orders (
    Amount DECIMAL(10,2)
    CHECK (Amount > 0)
);

ALTER Table orders
ADD CustomersID INT;

ALTER TABLE orders
ADD Foreign Key (customersID)
REFERENCES customers(CustomersID);

ALTER TABLE customers
MODIFY name VARCHAR(100) NOT NULL,
MODIFY email VARCHAR(20) NOT NULL,
ADD UNIQUE(email);

ALTER Table customers 
ADD phone VARCHAR(20)

ALTER Table customers 
MODIFY phone VARCHAR(20)

ALTER Table customers
ADD UNIQUE(phone)

ALTER Table customers
ADD Status VARCHAR(9) DEFAULT 'status'

ALTER TABLE customers
CHANGE name fullname VARCHAR(20)

DESCRIBE orders;


ALTER Table customers
DROP COLUMN status

RENAME Table orders TO customersorders

DROP Table customersorders

ALTER Table customers
MODIFY email VARCHAR(20)

SHOW INDEX FROM customers;

ALTER TABLE customers
DROP INDEX email;

ALTER TABLE customers
ADD customer_name VARCHAR(50),
ADD customer_surname VARCHAR(50),
ADD city VARCHAR(50),
ADD age INT,
ADD registration_date DATE;

INSERT INTO customers VALUES
(1, 'juan@gmail.com', 'Argentina', 'Juan', 'Gomez', 'Córdoba', 25, '2026-01-10'),
(2, 'maria@gmail.com', 'Argentina', 'Maria', 'Lopez', 'Madrid', 35, '2025-12-01'),
(3, 'juanp@gmail.com', 'Argentina', 'Juan', 'Perez', 'Buenos Aires', 40, '2026-02-15'),
(4, 'lucas@gmail.com', 'Argentina', 'Lucas', 'Garcia', 'Rosario', 28, '2026-03-20'),
(5, 'ana@gmail.com', 'Argentina', 'Ana', 'Gonzalez', 'Córdoba', 32, '2026-01-05');
INSERT INTO customers (
    CustomersID,
    Email,
    Country,
    customer_name,
    customer_surname,
    city,
    age,
    registration_date
) VALUES
(2, 'juan1@gmail.com', 'Argentina', 'Juan', 'Gomez', 'Cordoba', 25, '2026-01-10');
INSERT INTO customers (
    CustomersID,
    Email,
    Country,
    customer_name,
    customer_surname,
    city,
    age,
    registration_date
) VALUES
(5, 'juan443@gmail.com', 'Argentina', 'Juan', 'Gomez', 'Córdoba', 25, '2026-01-10'),
(6, 'maria@gmail.com', 'Argentina', 'Maria', 'Lopez', 'Madrid', 35, '2025-12-01'),
(7, 'juanp@gmail.com', 'Argentina', 'Juan', 'Perez', 'Buenos Aires', 40, '2026-02-15'),
(8, 'lucas@gmail.com', 'Argentina', 'Lucas', 'Garcia', 'Rosario', 28, '2026-03-20'),
(9, 'ana@gmail.com', 'Argentina', 'Ana', 'Gonzalez', 'Córdoba', 32, '2026-01-05');
SELECT customer_name, customer_surname
FROM customers;

SELECT customer_name, customer_surname
FROM customers
WHERE customer_name = 'Juan';

SELECT customer_name, customer_surname, email
FROM customers
WHERE city = 'Còrdoba';

SELECT customer_name, customer_surname, email
FROM customers
WHERE city = 'Còrdoba' AND age > 20;

SELECT customer_name, customer_surname, email
FROM customers
WHERE city = 'Còrdoba' OR city = 'madrid';

SELECT customer_name
FROM customers
WHERE age != 0

-- 7
SELECT name
FROM products
WHERE price > 100;

-- 8
SELECT *
FROM products
WHERE category = 'Electrónica' AND price < 500;

-- 9
SELECT *
FROM products
WHERE name LIKE '%Monitor%';

-- 10
SELECT *
FROM products
WHERE stock < 10 OR status = 'Discontinuado';

-- 11
SELECT *
FROM products
WHERE price = 10 OR price = 20 OR price = 50;

-- 12
SELECT *
FROM orders
WHERE order_date > '2026-01-01';

-- 13
SELECT *
FROM orders
WHERE customer_id = 5;

-- 14
SELECT *
FROM orders
WHERE status = 'Pendiente' OR status = 'Enviado';

-- 15
SELECT *
FROM orders
WHERE order_date BETWEEN '2026-03-01' AND '2026-03-31'
AND status = 'Pagado';

-- 16
SELECT *
FROM orders
WHERE store_id = 1 OR store_id = 2;

-- 17
SELECT *
FROM customers
WHERE city != 'Córdoba'
AND customer_surname LIKE 'G%';

-- 18
SELECT *
FROM products
WHERE (category = 'Audio' AND price < 100)
    OR (category = 'Video' AND price < 200);

-- 19
SELECT *
FROM customers
WHERE email LIKE '%@gmail.com'
AND YEAR(registration_date) = 2026;

-- 20
SELECT *
FROM orders
WHERE delivery_date IS NULL;