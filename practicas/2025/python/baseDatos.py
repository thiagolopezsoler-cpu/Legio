import mysql.connector

# Establecer la conexión
conexion = mysql.connector.connect(
    host="localhost",       # Cambia esto por tu host
    user="tu_usuario",     # Cambia esto por tu usuario
    password="tu_contraseña", # Cambia esto por tu contraseña
    database="nombre_de_la_base_de_datos" # Cambia esto por el nombre de tu base de datos
)

# Crear un cursor para ejecutar consultas
cursor = conexion.cursor()

# Ejecutar una consulta
cursor.execute("SELECT * FROM tu_tabla")  # Cambia esto por tu consulta

# Obtener los resultados
resultados = cursor.fetchall()

for fila in resultados:
    print(fila)

# Cerrar el cursor y la conexión
cursor.close()
conexion.close()