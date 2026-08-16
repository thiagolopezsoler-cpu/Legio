# 5- Juego de adivinanza de números:
# Genera un número aleatorio entre 1 y 100.
# Pide al usuario que adivine el número.
# Proporciona pistas al usuario si el número es demasiado alto o demasiado bajo.
# Continúa solicitando al usuario que adivine hasta que lo haga correctamente.
# Muestra el número de intentos necesarios para adivinar.

import random 


def adivinanza():
    numero = random.randint(1,100)
    intentos = 0
    while True:
        usuario = input("Adivina el numero ")
        if numero > usuario:
            print("EL numero es mayor")
        if numero < usuario:
            print("El numero es menor")
        if numero == usuario:
            print(f"{intentos} el numero es correcto")
            break
        intentos += 1

adivinanza()