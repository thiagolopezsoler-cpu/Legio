# 2. Definir función, parámetros, retorno,
# capturar un valor o varios

def operacion(a, b):
    suma = a + b
    resta = a - b
    return suma, resta

s, r = operacion(10, 4)
print(s)
print(r)    