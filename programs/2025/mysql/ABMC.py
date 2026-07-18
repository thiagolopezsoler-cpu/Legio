import mysql.connector

# Conexión a la base de datos
conexion = mysql.connector.connect(
    host="localhost",
    user="tu_usuario",        # <-- Reemplazá con tu usuario
    password="tu_contraseña", # <-- Reemplazá con tu contraseña
    database="abm_test"
)

cursor = conexion.cursor()

def mostrar_personas():
    cursor.execute("SELECT * FROM personas")
    resultados = cursor.fetchall()
    if resultados:
        for dni, nombre, edad in resultados:
            print(f"DNI: {dni}, Nombre: {nombre}, Edad: {edad}")
    else:
        print("No hay personas registradas.")

def alta():
    dni = input("DNI: ")
    nombre = input("Nombre: ")
    edad = int(input("Edad: "))
    try:
        cursor.execute("INSERT INTO personas (dni, nombre, edad) VALUES (%s, %s, %s)", (dni, nombre, edad))
        conexion.commit()
        print("Persona agregada correctamente.")
    except mysql.connector.Error as e:
        print("Error al agregar:", e)

def baja():
    dni = input("DNI de la persona a eliminar: ")
    cursor.execute("DELETE FROM personas WHERE dni = %s", (dni,))
    if cursor.rowcount > 0:
        conexion.commit()
        print("Persona eliminada correctamente.")
    else:
        print("Persona no encontrada.")

def modificacion():
    dni = input("DNI de la persona a modificar: ")
    nuevo_nombre = input("Nuevo nombre: ")
    nueva_edad = int(input("Nueva edad: "))
    cursor.execute("UPDATE personas SET nombre = %s, edad = %s WHERE dni = %s", (nuevo_nombre, nueva_edad, dni))
    if cursor.rowcount > 0:
        conexion.commit()
        print("Datos modificados correctamente.")
    else:
        print("Persona no encontrada.")

# Menú
while True:
    print("\n--- Menú ABM con MySQL ---")
    print("1. Alta")
    print("2. Baja")
    print("3. Modificación")
    print("4. Mostrar personas")
    print("5. Salir")

    opcion = input("Elegí una opción: ")

    if opcion == "1":
        alta()
    elif opcion == "2":
        baja()
    elif opcion == "3":
        modificacion()
    elif opcion == "4":
        mostrar_personas()
    elif opcion == "5":
        break
    else:
        print("Opción no válida.")

# Cierre de conexión
cursor.close()
conexion.close()
