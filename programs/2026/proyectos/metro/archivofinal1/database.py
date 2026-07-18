import sqlite3

def inicializar_db():
    # Conecta a la base de datos (si no existe, la crea automáticamente)
    conexion = sqlite3.connect("metro_sistema.db")
    cursor = conexion.cursor()
    
    # Creamos una tabla básica de usuarios para el inicio de sesión
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            usuario TEXT UNIQUE,
            contrasena TEXT
        )
    """)
    
    # Insertamos un usuario por defecto (admin / admin123) solo si la tabla está vacía
    cursor.execute("SELECT * FROM usuarios WHERE usuario = 'admin'")
    if not cursor.fetchone():
        cursor.execute("INSERT INTO usuarios (usuario, contrasena) VALUES ('admin', 'admin123')")
    
    conexion.commit()
    conexion.close()

def validar_login(user, password):
    conexion = sqlite3.connect("metro_sistema.db")
    cursor = conexion.cursor()
    
    # Buscamos si existe la combinación de usuario y contraseña
    cursor.execute("SELECT * FROM usuarios WHERE usuario = ? AND contrasena = ?", (user, password))
    resultado = cursor.fetchone()
    
    conexion.close()
    return resultado is not None  # Devuelve True si coincide, False si no