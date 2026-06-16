# 8- Generador de contraseñas aleatorias:
# Solicita al usuario que ingrese la longitud deseada para la contraseña.
# Genera una contraseña aleatoria con la longitud especificada.
# Utiliza caracteres alfanuméricos y caracteres especiales para mayor seguridad.
# Muestra la contraseña generada al usuario.

import random

longitud = int(input("Ingresa la longitud de la contraseña: "))

def generar(longitud):
    caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"
    contraseña = ""

    for i in range(longitud):
        pos = random.choice(caracteres)
        contraseña = contraseña + caracteres[pos]
        
    print("Contraseña generada:", contraseña)

generar(longitud)