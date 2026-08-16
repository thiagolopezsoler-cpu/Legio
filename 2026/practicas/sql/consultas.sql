-- =====================================================================
-- CREACIÓN DEL MODELO DE DATOS DE PRUEBA
-- =====================================================================
-- Eliminación de tablas previas si existieran para garantizar un entorno limpio
DROP TABLE IF EXISTS examenes;
DROP TABLE IF EXISTS alumnos;
-- Creación de la tabla de Alumnos
CREATE TABLE alumnos (
id_alumno INT PRIMARY KEY,
nombre VARCHAR(50) NOT NULL,
apellido VARCHAR(50) NOT NULL,
edad INT,
ciudad VARCHAR(50),
email VARCHAR(100),
telefono VARCHAR(20)
);
-- Creación de la tabla de Exámenes
CREATE TABLE examenes (
id_examen INT PRIMARY KEY,
materia VARCHAR(50) NOT NULL,
nota DECIMAL(4,2),
fecha_examen DATE,
estado VARCHAR(20)
);
-- Inserción de registros de prueba (Muestra con valores ausentes/NULL)
INSERT INTO alumnos (id_alumno, nombre, apellido, edad, ciudad, email, telefono) VALUES
(1, 'Juan Carlos', 'Pérez', 17, 'Córdoba', 'juan.perez@email.com', '351444555'),
(2, 'María Luz', 'Gómez', 18, 'Rosario', 'maria.gomez@email.com', NULL),
(3, 'Lucas', 'Rodríguez', 16, 'Córdoba', NULL, '351777888'),
(4, 'Ana Sofía', 'Fernández', 19, 'Mendoza', 'ana.fer@email.com', '261999111'),
(5, 'Diego', 'Martínez', 17, 'Córdoba', 'diego.m@email.com', NULL),
(6, 'Laura', 'López', 18, 'Buenos Aires', 'laura.lopez@email.com', '111222333'),
(7, 'Mateo', 'Álvarez', 16, 'Carlos Paz', NULL, NULL),
(8, 'Elena', 'Benítez', 20, 'Rosario', 'elena.b@email.com', '341555666'),
(9, 'Facundo', 'García', 17, 'Córdoba', 'facu.garcia@email.com', '351333222'),
(10, 'Milagros', 'Díaz', 19, 'Alta Gracia', 'mili.diaz@email.com', NULL);
-- Inserción de registros de exámenes realizados
INSERT INTO examenes (id_examen, materia, nota, fecha_examen, estado) VALUES
(1, 'Base de Datos', 8.50, '2026-04-15', 'Aprobado'),
(2, 'Programación', 4.00, '2026-04-18', 'Desaprobado'),
(3, 'Base de Datos', 9.00, '2026-05-02', 'Aprobado'),
(4, 'Sistemas Operativos', 5.50, '2026-04-20', 'Desaprobado'),
(5, 'Matemática', 7.00, '2026-05-10', 'Aprobado'),
(6, 'Programación', 10.00, '2026-05-12', 'Aprobado'),
(7, 'Base de Datos', 2.50, '2026-04-15', 'Desaprobado'),
(8, 'Ética Profesional', 6.00, '2026-05-14', 'Aprobado'),
(9, 'Sistemas Operativos', 8.00, '2026-05-18', 'Aprobado'),
(10, 'Matemática', 3.00, '2026-04-22', 'Desaprobado');

SELECT nombre as nombre_alumno,
apellido as apellido_alumno
from alumnos

SELECT CONCAT (nombre, " ", apellido) AS estudiante
from alumnos;

SELECT materia, 
nota as Calificacion_Final
from examenes

-- SELECT nombre, count(*)
-- from alumnos
-- group by edad

SELECT DISTINCT materia
From examenes

SELECT * 
FROM alumnos
WHERE edad = 17;

SELECT * 
FROM alumnos
WHERE nombre LIKE 'm%';

SELECT * 
FROM alumnos
WHERE nombre LIKE '%ez'

SELECT materia 
FROM examenes
WHERE materia LIKE '%sistemas%'

SELECT nombre, COUNT(*)
FROM alumnos
WHERE apellido is NOT null
GROUP BY nombre


SELECT * 
FROM alumnos
WHERE nombre LIKE 'M%'

SELECT *
FROM alumnos 
WHERE apellido '%ez'

SELECT * 
FROM alumnos
WHERE nombre LIKE '% %'

SELECT * 
FROM alumnos
WHERE email LIKE '@email.com'

SELECT *
FROM examenes
WHERE nota BETWEEN 6 AND 8.5

SELECT * 
FROM alumnos
WHERE edad BETWEEN 17 and 19

SELECT *
FROM examenes
WHERE fecha_examen BETWEEN 2026-04-15 AND 2026-04-30

SELECT *
FROM examenes
WHERE nota NOT BETWEEN 4 AND 7

SELECT * 
FROM alumnos
WHERE edad NOT BETWEEN 16 AND 18 

SELECT *
FROM alumnos
WHERE ciudad NOT IN ('Córdoba', 'Rosario' OR 'Mendoza')

SELECT *
FROM examenes
WHERE materia IN ('Basede Datos' OR 'Programación')

SELECT *, COUNT(*)
FROM alumnos
WHERE edad BETWEEN 16 AND 20
ORDER BY edad

SELECT *
FROM examenes
WHERE estado IN ('APROBADO')

SELECT *
FROM alumnos
WHERE ciudad NOT IN ('BUENOS AIRES' OR 'CORDOBA')

SELECT *
FROM alumnos
WHERE telefono LIKE ' '

