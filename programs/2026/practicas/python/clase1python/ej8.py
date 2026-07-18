# 8.  crearemos un programa que verifica si
# un número ingresado por el usuario es positivo,
# negativo o cero, y también si es un número par o impar.

numero = print("Ingresa un numero ")

if numero == 0:
    print(f"{numero} es 0")
elif numero > 0:
    print(f"{numero} es positivo")
elif numero < 0:
    print(f"{numero} es negativo")

if numero % 2 == 0:
    print("El numero es par")
else:
    print("EL numero es impar")