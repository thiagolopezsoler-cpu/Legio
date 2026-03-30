# Ejercicio 3: Clase CuentaBancaria + Tupla y Ciclo
# Objetivo: Crear una tupla de cuentas y realizar depósitos y retiros.


class Bancaria:
    def __init__(self, nombre, plata):
        self.nombre = nombre
        self.plata = plata
       
    def depositar(self, cantidad):
        self.plata += cantidad

    def retirar(self, cantidad):
        if cantidad <= self.plata:
            self.plata -= cantidad
        else:
            print("plata insuficiente") 
cuentas = (Bancaria('pepe', 100), Bancaria('jose', 200))
        
for cuenta in cuentas:
    print(cuenta.nombre, cuenta.plata)
    cuenta.depositar(50)   
    cuenta.retirar(30)     
    print(cuenta.plata)
    print()