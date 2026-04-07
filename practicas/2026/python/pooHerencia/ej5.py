# Ejercicio 5: Clase Empleado y Herencia a Gerente
# Crear una clase Empleado con atributos básicos y luego una clase Gerente que herede y
# agregue un bono salarial.
# Resultado
# Carlos: $600000
# Ana: $970000

class Empleado():
    def __init__(self, nombre, sueldo):
        self.nombre = nombre
        self.sueldo = sueldo
        
    def imprimir(self):
        print(f"{self.nombre}: ${self.sueldo}")
        
class Gerente(Empleado):
    def __init__(self, nombre, sueldo, bono ):
        super().__init__(nombre, sueldo)
        self.bono = bono
    def imprimir(self):
        print(f"{nombre}{self.sueldo + self.bono}")