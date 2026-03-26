# Escriba un programa que permita crear una lista de palabras y que, a continuación de tres opciones:

# * Contar: Me pide una cadena, y me dice cuantas veces aparece en la lista
# * Modificar: Me pide una cadena, y otra cadena a modificar, y modifica todas alas apariciones de la primera por la segunda en la lista.
# * Eliminar: Me pide una cadena, y la elimina de la lista.
# * Mostrar: Muestra la lista de cadenas
# * Terminar

def lista_palabras():
    lista = []
    for i in range(999):
        palabra = input("Ingrese una palabra(escriba salir para terminar): ")
        if palabra != "salir":
            lista.append(palabra)
        else:
            break
        
    que_hacer = input("Que quiere hacer?(contar/modificar/eliminar/mostrar/terminar) ")

    if que_hacer == "contar":
        contar(lista)
    elif que_hacer == "modificar":
        modificar(lista)
    elif que_hacer == "eliminar":
        eliminar(lista)
    elif que_hacer == "mostrar":
        mostrar(lista)
    else:
        print("Respuesta invalida")
        
def contar(lista):
    buscar = input("QUe cadena queres contar? ")
    print(lista.count(buscar))
    
    
def modificar(lista):
    buscar = input("Que palabra desear modificar? ")
    palabra = input("Porque la queres modificar? ")
    # print(lista.insert(lista.index(buscar), palabra))
    for i in range(len(lista)):
        if lista[i] == buscar:
            lista[i] = palabra
    
def eliminar(lista):
    borrar = input("Cual palabra queres eliminar")
    lista.remove(borrar)
    print(lista)
def mostrar(lista): 
    for i in range(len(lista)):
        print(lista[i])
    
    
lista_palabras()