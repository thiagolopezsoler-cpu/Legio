# 4- Validador de contraseña:
# Solicita al usuario que cree una contraseña.
# Verifica si la contraseña cumple con los siguientes criterios:
# Tiene al menos 8 caracteres de longitud.
# Contiene al menos una letra mayúscula y una letra minúscula.
# Tiene al menos un número.
# Tiene al menos un carácter especial (por ejemplo, !, @, #, $, %, etc.).
# Informa al usuario si la contraseña es válida o no.

contraseña = input("crea una contraseña ")

def validacion(contraseña):
    mayuscula(contraseña)
    minuscula(contraseña)
    mas8(contraseña)
    numero(contraseña)
    especial(contraseña)
    if mayuscula () and minuscula() and mas8() and numero() and especial():
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
        if contraseña[i] in "ABCDE":
            return True
    return True