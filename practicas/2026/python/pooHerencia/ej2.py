# Ejercicio 2: Clase Vehículo y Herencia a Automóvil
# Crear una clase Vehículo con atributos genéricos y luego una clase Automóvil que herede de
# Vehículo y agregue atributos específicos.
# Resultado
# Vehículo: Toyota Corolla
# Vehículo: Ford Mustang, Tipo: Deportivo

class Vehiculo():
    def __init__(self, modelo):
        self.modelo = input("modelo")
    def mostrar(self):
        print(f"Vehículo: {self.modelo}")
        
class Automovil(Vehiculo):
    def __init__(self, modelo, tipo):
        super().__init__(modelo)
        self.tipo = input("tipo")
    def mostrar_auto(self):
        print(f"Vehículo: {self.modelo}, Tipo: {self.tipo}")
    
a = Automovil()
a.mostrar_auto()