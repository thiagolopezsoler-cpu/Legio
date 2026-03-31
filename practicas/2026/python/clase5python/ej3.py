# 3- Generador de secuencia Fibonacci:
# Pide al usuario que ingrese un número entero positivo.
# Genera los primeros n números de la secuencia Fibonacci, donde n es el número ingresado 
# por el usuario.
# Muestra la secuencia Fibonacci resultante.

n = int(input("dame un numero"))
def generador(n):
    secuencia = [0, 1]
    if n < 1:
        print("ingresa un numero mayor a 1 entero")
    else:
        for i in range(n):
            numero_nuevo = secuencia[i] + secuencia[i + 1]
            secuencia.append(nuevo_nuevo)