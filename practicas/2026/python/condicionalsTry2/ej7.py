def sistema_seguridad():
    password = "1234"
    intento = input("Introduce la contraseña: ")
    if intento == password:
        print("Bienvenid@...")
    else:
        print("Ordenador bloqueado. Contraseña incorrecta.")

sistema_seguridad()