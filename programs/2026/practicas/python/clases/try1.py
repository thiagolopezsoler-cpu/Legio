class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    def saludar(self):
        print(f"Hola, soy {self.nombre} y tengo {self.edad} años")


p1 = Persona("Thiago", 16)
p1.saludar()