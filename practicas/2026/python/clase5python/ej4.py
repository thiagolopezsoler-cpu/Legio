# 4- Validador de contraseña:
# Solicita al usuario que cree una contraseña.
# Verifica si la contraseña cumple con los siguientes criterios:
# Tiene al menos 8 caracteres de longitud.
# Contiene al menos una letra mayúscula y una letra minúscula.
# Tiene al menos un número.
# Tiene al menos un carácter especial (por ejemplo, !, @, #, $, %, etc.).
# Informa al usuario si la contraseña es válida o no.

contraseña = input("crea una contraseña ")

contraseña = input("crea una contraseña: ")

def validacion(contraseña):
    if mayuscula(contraseña) and minuscula(contraseña) and mas8(contraseña) and numero(contraseña) and especial(contraseña):
        print("es segura")
    else:
        print("no es segura")

def mayuscula(contraseña):
    for i in range(len(contraseña)):
        if contraseña[i] in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":
            return True
    return False

def minuscula(contraseña):
    for i in range(len(contraseña)):
        if contraseña[i] in "abcdefghijklmnopqrstuvwxyz":
            return True
    return False

def mas8(contraseña):
    if len(contraseña) >= 8:
        return True
    return False

def numero(contraseña):
    for i in range(len(contraseña)):
        if contraseña[i] in "0123456789":
            return True
    return False

def especial(contraseña):
    for i in range(len(contraseña)):
        if contraseña[i] in "!@#$%&*":
            return True
    return False

validacion(contraseña)