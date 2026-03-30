-- Trabajo DDL
-- Nombre: Thiago

-- Crear tabla Customers
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(150)
);

-- Crear tabla Orders
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    OrderDate DATE,
    CustomerID INT
);

-- Rehacer Customers con restricciones
DROP TABLE Customers;
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Email VARCHAR(150) UNIQUE,
    Country VARCHAR(50) DEFAULT 'Argentina'
);

-- Orders con CHECK
DROP TABLE Orders;
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    Amount DECIMAL(10,2),
    CHECK (Amount > 0)
);

-- Relación con FK
DROP TABLE Orders;
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- NOT NULL
DROP TABLE Customers;
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(150) NOT NULL
);

-- ALTER

ALTER TABLE Customers ADD Phone VARCHAR(15);

ALTER TABLE Customers MODIFY Phone VARCHAR(20);

ALTER TABLE Customers ADD UNIQUE (Phone);

ALTER TABLE Customers ADD Status VARCHAR(20) DEFAULT 'Active';

ALTER TABLE Customers CHANGE Name FullName VARCHAR(100);

ALTER TABLE Customers DROP COLUMN Status;

-- FK después
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT
);

ALTER TABLE Orders
ADD FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID);

-- Renombrar
RENAME TABLE Orders TO CustomerOrders;

-- DROP
DROP TABLE CustomerOrders;

-- Eliminar UNIQUE
ALTER TABLE Customers DROP INDEX Phone;