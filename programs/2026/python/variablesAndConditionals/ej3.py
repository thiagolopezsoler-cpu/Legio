mayusculas = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
]
numeros = ["0","1","2","3","4","5","6","7","8","9"]

def confirmar_contraseña_segura(contraseña):
        
    def minimo_caracteres(contraseña):
        return len(contraseña) >= 8
        
    def con_numero(contraseña):
        for i in range(len(contraseña)):
            if contraseña[i] in numeros:
                return True
        return False
    
    def con_mayuscula(contraseña):
        for i in contraseña:
            if contraseña[i] in mayusculas:
                return True
        return False
    def sin_espacio(contraseña):
        for i in range(len(contraseña)):
            if contraseña[i] == " ":
                return False
        return True
    
    if minimo_caracteres(contraseña) and con_numero(contraseña) and con_mayuscula(contraseña) and sin_espacio(contraseña):
        print("La contraseña es segura")
    else:
        print("La contraseña no es segura")
        
contraseña = input("Introduzca una contraseña con mas de 7 caracteres, una mayuscula y un numero al menos, que no contenga espacios ")
confirmar_contraseña_segura(contraseña)






"""mayusculas = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
]
numeros = ["0","1","2","3","4","5","6","7","8","9"]

def confirmar_contraseña_segura(contraseña):
    if len(contraseña) >= 8:
        mayuscula = False
        
        for i in range(len(contraseña)):
            if contraseña[i] in mayusculas:
                mayuscula = True
                
        if mayuscula == True:
            espacio = False
            #for i in range(len(contraseña)):
            if " " in contraseña:
                    espacio = True
            if espacio == True:
                #numero = False
                for i in range(len(contraseña)):
                    if contraseña[i] in numeros:
                        print("La contraseña es segura")
    
    else:
        print("La contraseña no es segura")
contraseña = input("Introduzca una contraseña con mas de 7 caracteres, una mayuscula y un numero al menos, que no contenga espacios ")
confirmar_contraseña_segura(contraseña)
"""