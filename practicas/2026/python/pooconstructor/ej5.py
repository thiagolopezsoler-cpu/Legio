# Ejercicio 5: Clase Coche + Diccionario y Tupla
# Objetivo: Crear un diccionario de coches y almacenar sus descripciones en una tupla.

class Coche:
    def __init__(self, marca, modelo, año):
        self.marca = marca
        self.modelo = modelo
        self.año = año

coches = {}

while True:
    marca = input("Marca: ")
    modelo = input("Modelo: ")
    año = input("Año: ")

    coche = Coche(marca, modelo, año)

    descripcion = (coche.marca, coche.modelo, coche.año)
    coches[marca] = descripcion

    seguir = input("¿Querés agregar otro coche? (si/no): ")
    if seguir == "no":
        break

for clave in coches:
    print(clave, ":", coches[clave])