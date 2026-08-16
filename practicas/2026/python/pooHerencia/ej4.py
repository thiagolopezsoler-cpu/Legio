# Ejercicio 4: Clase CuentaBancaria y Herencia a CuentaAhorros
# Crear una clase CuentaBancaria con métodos básicos y luego una clase CuentaAhorros que
# herede y agregue funcionalidad específica (como interés).
# Resultado
# Depósito de $500. Saldo actual: $1500
# Interés aplicado: $75.00. Saldo actual: $1575.00
# Retiro de $200. Saldo actual: $1375

class CuentaBancaria:
    def __init__(self, nombre, saldo):
        self.nombre = nombre
        self.saldo = saldo

    def depositar(self, monto):
        self.saldo += monto
        print(f"Depósito de ${monto}. Saldo actual: ${self.saldo}")

    def retirar(self, monto):
        self.saldo -= monto
        print(f"Retiro de ${monto}. Saldo actual: ${self.saldo}")


class CuentaAhorros(CuentaBancaria):
    def aplicar_interes(self, tasa):
        interes = self.saldo * tasa
        self.saldo += interes
        print(f"Interés aplicado: ${interes:.2f}. Saldo actual: ${self.saldo:.2f}")