CREATE DATABASE IF NOT EXISTS Ventas;
USE Ventas;

CREATE TABLE Producto (
    id_Producto INT NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(255) NOT NULL,
    Precio DECIMAL(10,2) NOT NULL,
    Stock INT NOT NULL,
    PRIMARY KEY (id_Producto)
);

CREATE TABLE Cliente (
    id_cliente INT NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(255) NOT NULL,
    Apellido VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_cliente)
);

CREATE TABLE Vendedor (
    Legajo_Vendedor VARCHAR(5) NOT NULL,
    Nombre VARCHAR(255) NOT NULL,
    Apellido VARCHAR(255) NOT NULL,
    Telefono VARCHAR(20) NOT NULL,
    PRIMARY KEY (Legajo_Vendedor)
);

CREATE TABLE Ventas (
    id_Ventas INT NOT NULL AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    fecha DATETIME NOT NULL,
    cantidad INT NOT NULL,
    Legajo_Vendedor VARCHAR(5) NOT NULL,
    Total DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id_Ventas),
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente),
    FOREIGN KEY (Legajo_Vendedor) REFERENCES Vendedor(Legajo_Vendedor)
);

CREATE TABLE DetalleVenta (
    id_DetalleVenta INT NOT NULL AUTO_INCREMENT,
    id_Producto INT NOT NULL,
    Cantidad INT NOT NULL,
    id_Ventas INT NOT NULL,
    precioUnitario DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id_DetalleVenta),
    FOREIGN KEY (id_Producto) REFERENCES Producto(id_Producto),
    FOREIGN KEY (id_Ventas) REFERENCES Ventas(id_Ventas)
);

INSERT INTO Cliente (Nombre, Apellido) VALUES
('Juan', 'Perez'),
('Alejandro', 'Gonzalez'),
('Maximiliano', 'Rodriguez'),
('Ana', 'Lopez'),
('Sebastian', 'Martinez');

INSERT INTO Vendedor (Legajo_Vendedor, Nombre, Apellido, Telefono) VALUES
('V001', 'Carlos', 'Gomez', '1123456789'),
('V002', 'Martin', 'Sanchez', '1134567890'),
('V003', 'Laura', 'Fernandez', '1145678901');

INSERT INTO Producto (Nombre, Precio, Stock) VALUES
('Pizza Muzarella', 18000, 20),
('Pizza Napolitana', 22000, 15),
('Pizza Especial', 25000, 10),
('Hamburguesa Completa', 12000, 30),
('Lomito Completo', 17000, 12),
('Papas Fritas', 5000, 40);

INSERT INTO Ventas (id_cliente, fecha, cantidad, Legajo_Vendedor, Total) VALUES
(1, '2026-07-01 12:30:00', 2, 'V001', 36000),
(2, '2026-07-02 13:00:00', 3, 'V002', 66000),
(3, '2026-07-03 20:00:00', 1, 'V001', 25000),
(4, '2026-07-04 21:00:00', 4, 'V003', 68000);

INSERT INTO DetalleVenta
(id_Producto, Cantidad, id_Ventas, precioUnitario)
VALUES
(1, 2, 1, 18000),
(2, 3, 2, 22000),
(3, 1, 3, 25000),
(5, 4, 4, 17000);

1act

SELECT Nombre, Apellido
FROM Cliente
ORDER BY CHAR_LENGTH(Nombre) DESC
LIMIT 1;

act 2

ALTER TABLE Producto
DROP COLUMN Stock;

act 3

SELECT Nombre, Precio
FROM Producto
WHERE Precio > 15000;

act 4

SELECT MAX(Total) AS MejorVenta
FROM Ventas;

act 5

SELECT Nombre, Precio
FROM Producto
WHERE Nombre LIKE '%Pizza%'
ORDER BY Precio DESC
LIMIT 1;

act 6

ALTER TABLE Cliente
ADD Email VARCHAR(100);

da la suma total de todas las recaudaciones
agrega esos snombres a esas TABLESPACEagrega una columna a esa TABLa 
agrega una columna a esa tabla 
borra el cliente con el id 8

CREATE TABLE Autores (
    id_autor INT PRIMARY KEY,
    nombre VARCHAR(80) NOT NULL,
    nacionalidad VARCHAR(50),
    fecha_nacimiento DATE
);
ALTER TABLE Libros
ADD cantidad_paginas INT NOT NULL;