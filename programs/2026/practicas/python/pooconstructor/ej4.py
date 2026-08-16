# Ejercicio 4: Clase Libro + Lista y Condicional
# Objetivo: Crear una lista de libros y mostrar solo los publicados después del año 2000.

libros = []
class Libro:
    def __init__(self, nombre, autor, año):
        self.nombre = nombre
        self.autor = autor
        self.año = año


while True:
    libro = Libro(input("escribi nombre, autor, año "))
    if libro != "salir":
        break
    else:
        libros.append(libro)
        
for libro in libros:
    if int(libro["año"]) == 2000:
        print(libro)