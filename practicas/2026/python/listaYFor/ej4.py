# Ejercicio 4
# Escribir un programa que pregunte al usuario los números ganadores de la lotería primitiva, los
# almacene en una lista y los muestre por pantalla ordenados de menor a mayor.
# random.randint(1,10)

def loteria_primitiva():
    numero_usuarios = input("Cuales son los numeros de la loteria? separalos con coma sin espacios: ")
    numeros_loteria = [int(n) for n in numero_usuarios.split(",")]
    numeros_loteria.sort()
    print(numeros_loteria)
    
    
loteria_primitiva()