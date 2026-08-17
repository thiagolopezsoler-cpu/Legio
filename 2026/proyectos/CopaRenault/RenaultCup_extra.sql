USE RenaultCup;

CREATE TABLE IF NOT EXISTS Pago_Equipo (
    id_pago INT AUTO_INCREMENT,
    id_equipo INT NOT NULL,
    monto DECIMAL(10,2) NOT NULL DEFAULT 0,
    estado VARCHAR(20) NOT NULL DEFAULT 'Pendiente',
    fecha_pago DATETIME NULL,
    PRIMARY KEY (id_pago),
    FOREIGN KEY (id_equipo) REFERENCES Equipo(id_equipo)
);

CREATE TABLE IF NOT EXISTS Horario_Comida (
    id_horario INT AUTO_INCREMENT,
    id_equipo INT NOT NULL,
    fecha DATE NULL,
    horario_inicio TIME NOT NULL,
    horario_final TIME NULL,
    zona VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_horario),
    FOREIGN KEY (id_equipo) REFERENCES Equipo(id_equipo)
);

CREATE TABLE IF NOT EXISTS Producto_Cantina (
    id_producto INT AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Descripcion VARCHAR(255) NULL,
    Precio DECIMAL(10,2) NOT NULL DEFAULT 0,
    Disponible BOOLEAN NOT NULL DEFAULT TRUE,
    PRIMARY KEY (id_producto)
);

CREATE TABLE IF NOT EXISTS Sponsor (
    id_sponsor INT AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Descripcion VARCHAR(255) NULL,
    Logo VARCHAR(255) NULL,
    Enlace VARCHAR(255) NULL,
    PRIMARY KEY (id_sponsor)
);

CREATE TABLE IF NOT EXISTS Entrada (
    id_entrada INT AUTO_INCREMENT,
    Email VARCHAR(40) NOT NULL,
    tipo VARCHAR(30) NOT NULL DEFAULT 'General',
    precio DECIMAL(10,2) NOT NULL DEFAULT 0,
    estado VARCHAR(20) NOT NULL DEFAULT 'Pendiente',
    fecha_compra DATETIME NULL,
    PRIMARY KEY (id_entrada),
    FOREIGN KEY (Email) REFERENCES Cuenta_habilitada(Email)
);

CREATE TABLE IF NOT EXISTS Inscripcion (
    id_inscripcion INT AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Telefono VARCHAR(20) NULL,
    Colegio VARCHAR(100) NULL,
    Deporte VARCHAR(30) NOT NULL,
    Categoria VARCHAR(30) NULL,
    Mensaje VARCHAR(500) NULL,
    estado VARCHAR(20) NOT NULL DEFAULT 'Pendiente',
    fecha_inscripcion DATETIME NULL,
    PRIMARY KEY (id_inscripcion)
);

CREATE TABLE IF NOT EXISTS Gol (
    id_gol INT AUTO_INCREMENT,
    id_partido INT NOT NULL,
    id_jugador INT NOT NULL,
    minuto INT NULL,
    PRIMARY KEY (id_gol),
    FOREIGN KEY (id_partido) REFERENCES Partido(id_partido),
    FOREIGN KEY (id_jugador) REFERENCES jugador(id_jugador)
);

CREATE TABLE IF NOT EXISTS Documento (
    id_documento INT AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Descripcion VARCHAR(255) NULL,
    Archivo VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_documento)
);

CREATE TABLE IF NOT EXISTS Lugar_Evento (
    id_lugar INT AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Tipo VARCHAR(30) NOT NULL,
    Descripcion VARCHAR(255) NULL,
    Ubicacion VARCHAR(255) NULL,
    PRIMARY KEY (id_lugar)
);