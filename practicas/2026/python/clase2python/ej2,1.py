# 2.1. Escribe un programa que solicita al usuario
# que ingrese números enteros positivos y muestre
# la suma de esos números. La entrada de números
# continuará hasta que el usuario ingrese un 
# número negativo, momento en el que el programa 
# mostrará la suma total.

suma = 0 
while True:
    try:
        numero = int(input("ingrese numeros(el programa termina con un numero negativo)"))
    except ValueError:
        print("El valor no es un numero")
    suma += numero
    print(suma)
    if numero < 0:
        break
    