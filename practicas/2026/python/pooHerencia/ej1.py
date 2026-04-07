# Ejercicio 1: Clase Persona y Herencia a Estudiante
# Crear una clase Persona con atributos básicos y luego una clase Estudiante que herede de
# Persona y agregue atributos específicos.
# Resultado
# Hola, soy Ana y tengo 30 años.
# Hola, soy Luis y tengo 20 años. Estudio Ingeniería.

class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def saludar(self):
        print(f"Hola, soy {self.nombre} y tengo {self.edad} años.")


class Estudiante(Persona):
    def __init__(self, nombre, edad, carrera):
        super().__init__(nombre, edad)
        self.carrera = carrera
        

    def saludar(self):
        print(f"Hola, soy {self.nombre} y tengo {self.edad} años. Estudio {self.carrera}.")