# Ejercicio 2: Clase Rectángulo + Diccionario y Condicional
# Objetivo: Crear un diccionario de rectángulos y calcular el área de los que tienen una
# base mayor a 5.

class Retangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura
    def calculo(self):
        if self.base > 5:
            print(self.base * self.altura)

retangulos = {}

retangulos["r1"] = Retangulo(3, 6)
retangulos["r2"] = Retangulo(6, 10)
retangulos["r3"] = Retangulo(3, 7)

for Retangulo in retangulos.values():
    Retangulo.calculo()