# Ejercicio 3: Clase Animal y Herencia a Perro y Gato
# Crear una clase base Animal con un método genérico, y luego dos clases derivadas (Perro y
# Gato) que hereden y personalicen el comportamiento.
# Resultado
# Firulais (Labrador): ¡Guau guau!
# Misu (Negro): ¡Miau!

class Animal():
    def __init__(self, nombre, raza):
        self.nombre = nombre
        self.raza = raza
        
    def sonido_generico(self):#encasulamiento, herencia
        print("sonido generico")

class Perro(animal):
    def sonido(self):
        print(f"{nombre} {raza} guau guau")

class Gato(animal):
    def sonido(self):
        print(f"{nombre} {raza} miau miau ")
        