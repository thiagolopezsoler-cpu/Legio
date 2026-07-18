CREATE DATABASE practica;

USE practica;

CREATE TABLE customers (
    customersID INT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(150)
);

CREATE TABLE orders (
    ordersID INT PRIMARY KEY,
    orderDate DATE,
    customerID INT,
    FOREIGN KEY (customerID) REFERENCES customers(customersID)
);

DROP TABLE orders

DROP TABLE customers

CREATE TABLE customers (
    customersID INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    country VARCHAR(80) DEFAULT 'argentina'
)

CREATE TABLE orders (
    ordersID INT PRIMARY KEY,
    orderDate DATE,
    customerID INT,
    FOREIGN KEY (customerID) REFERENCES customers(customersID)
)