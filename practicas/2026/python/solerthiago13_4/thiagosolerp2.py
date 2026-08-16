#Lopez Soler
# Ejercicio 17: Crear una función para convertir un diccionario a JSON
# Escribe una función llamada dict_to_json que reciba un diccionario y devuelva su
# representación en JSON.
# Resultado
# {"nombre": "Héctor", "edad": 30}

#tengo linux 
import json

diccionario = {"nombre": "Héctor", "edad": 30}


def dict_to_json(diccionario):
    try:
        #Esto hace que se borre todo lo que esta, si quisiera mantener lo que esta y agregar cosas nuevas uso el add
        with open("archivo.json", "w"):
            archivo = diccionario
        #Esto lee el archivo y hace una accion, en este caso mostar el consola el contenido del archivo
        with open("archivo.json", "r"):
            print(archivo)
            
    except FileNotFoundError:
        print("no se encontro")
#Llamo a la funcion
dict_to_json(diccionario)