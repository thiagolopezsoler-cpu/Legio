# Ejercicio 2: Clase Vehículo y Herencia a Automóvil
# Crear una clase Vehículo con atributos genéricos y luego una clase Automóvil que herede de
# Vehículo y agregue atributos específicos.
# Resultado
# Vehículo: Toyota Corolla
# Vehículo: Ford Mustang, Tipo: Deportivo


class Vehiculo:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo
        
    def nombrar(self):
        print(f"{self.marca}{self.modelo}")
    
class Automovil(Vehiculo):
    def __init__(self, tipo, marca, modelo):
        super().__init__(marca, modelo)
        self.tipo = tipo
        
    def nombra(self):
        print(f"{self.tipo}{self.marca}{self.modelo}")
a = Automovil("toyota","qsy", "jhi")
a.nombra()