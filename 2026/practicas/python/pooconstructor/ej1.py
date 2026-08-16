# Ejercicio 1: Clase Persona + Lista y Ciclo
# Objetivo: Crear una lista de personas y mostrar su información usando un ciclo.

lista = []

class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    
    def informacion(self):
        print(self.nombre, self.edad)


lista.append(Persona("Thiago", 17))
lista.append(Persona("Lucas", 16))
lista.append(Persona("María", 18))

for Persona in lista:
    Persona.informacion() 