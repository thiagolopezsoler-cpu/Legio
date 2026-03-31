# 1- Calculadora de índice de masa corporal (IMC):
# - Solicita al usuario que ingrese su peso en kg y su altura en metros.
# - Calcula el IMC utilizando la fórmula: IMC = peso / (altura * altura).
# - Muestra el IMC calculado y una categoría de peso según el IMC (talla s, talla m, talla l,
# talla xl).


def calculadora(peso, altura):
    try:
        IMC = peso/ altura * altura
        print(IMC)
        
        if IMC < 18.5:
            print("Talle S")
        elif IMC < 25:
            print("Talle M")
        elif IMC < 30:
            print("Talle L")
        else:
            print("Talle XL")
    except ValueError:
        print("Escriba un numero valido")
peso = input("cuanto pesas")
altura = input("cuanto medis")
calculadora(peso, altura)