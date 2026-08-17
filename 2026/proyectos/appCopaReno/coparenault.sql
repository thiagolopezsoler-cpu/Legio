CREATE DATABASE copa_renault;

USE copa_renault;

-- Tabla usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol VARCHAR(30) NOT NULL
);

-- Tabla deportes
CREATE TABLE deportes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- Tabla sponsors
CREATE TABLE sponsors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    logo_url VARCHAR(255)
);

-- Tabla medicos
CREATE TABLE medicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    telefono VARCHAR(30),
    especialidad VARCHAR(50)
);

-- Tabla restricciones (alergias, dietas, etc)
CREATE TABLE restricciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- Tabla productos (kiosco, buffet, merchandising)
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    descripcion TEXT
);

-- Tabla equipos
CREATE TABLE equipos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    colegio VARCHAR(100),
    deporte_id INT,
    cantidad_jugadores INT,
    FOREIGN KEY (deporte_id) REFERENCES deportes(id)
);

-- Tabla jugadores
CREATE TABLE jugadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    dni VARCHAR(20) NOT NULL,
    numero_camiseta INT,
    posicion VARCHAR(50),
    equipo_id INT NOT NULL,
    FOREIGN KEY (equipo_id) REFERENCES equipos(id)
);

-- Tabla partidos
CREATE TABLE partidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    equipo1_id INT NOT NULL,
    equipo2_id INT NOT NULL,
    fecha DATE,
    hora TIME,
    goles_equipo1 INT,
    goles_equipo2 INT,
    estado VARCHAR(30),
    FOREIGN KEY (equipo1_id) REFERENCES equipos(id),
    FOREIGN KEY (equipo2_id) REFERENCES equipos(id)
);

-- Tabla asistencias_medicas
CREATE TABLE asistencias_medicas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    medico_id INT NOT NULL,
    jugador_id INT NOT NULL,
    equipo_id INT NOT NULL,
    descripcion TEXT,
    fecha DATETIME,
    FOREIGN KEY (medico_id) REFERENCES medicos(id),
    FOREIGN KEY (jugador_id) REFERENCES jugadores(id),
    FOREIGN KEY (equipo_id) REFERENCES equipos(id)
);

-- Tabla reservas
CREATE TABLE reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    fecha DATETIME,
    estado VARCHAR(30),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Tabla detalle_reserva
CREATE TABLE detalle_reserva (
    id INT AUTO_INCREMENT PRIMARY KEY,
    reserva_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad INT NOT NULL,
    FOREIGN KEY (reserva_id) REFERENCES reservas(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- Tabla producto_restriccion (relacion muchos a muchos)
CREATE TABLE producto_restriccion (
    producto_id INT NOT NULL,
    restriccion_id INT NOT NULL,
    PRIMARY KEY (producto_id, restriccion_id),
    FOREIGN KEY (producto_id) REFERENCES productos(id),
    FOREIGN KEY (restriccion_id) REFERENCES restricciones(id)
);

-- Tabla pagos
CREATE TABLE pagos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    equipo_id INT NOT NULL,
    reserva_id INT,
    monto DECIMAL(10,2) NOT NULL,
    metodo VARCHAR(30),
    estado VARCHAR(30),
    fecha DATETIME,
    referencia_pago VARCHAR(100),
    FOREIGN KEY (equipo_id) REFERENCES equipos(id),
    FOREIGN KEY (reserva_id) REFERENCES reservas(id)
);

-- Tabla inscripciones
CREATE TABLE inscripciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    equipo_id INT NOT NULL,
    fecha_inscripcion DATE,
    estado VARCHAR(30),
    pago_id INT,
    FOREIGN KEY (equipo_id) REFERENCES equipos(id),
    FOREIGN KEY (pago_id) REFERENCES pagos(id)
);

INSERT INTO deportes (nombre) VALUES
('Futbol'),
('Basquet'),
('Voley');