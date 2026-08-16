class CuentaBancaria():
    def __init__(self):
        self.__saldo = float(input("ingrese saldo "))
        self.__titular = input("titular ")
        
    def depositar(self, monto):
        self.__saldo += monto
        
    def retirar(self, monto):
        if self.__saldo >= monto:
            self.__saldo -=monto
        else:
            print("Saldo insuficiente")
    def get_saldo(self):
        return self.__saldo
    def set_saldo(self, nuevo_saldo):
        self.__saldo = nuevo_saldo
    

class CuentaAhorro(CuentaBancaria):
    def __init__(self):
        super().__init__()
        self.__interes = float(input("ingrese interes "))
    def aplicar_interes(self):
        saldo = self.get_saldo()
        saldo += saldo * self.__interes
        self.set_saldo(saldo)

a = CuentaAhorro()
a.depositar(800)