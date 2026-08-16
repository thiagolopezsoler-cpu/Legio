# Basic syntax and variables
nombre = "Juan"
edad = 30
altura = 1.75
es_estudiante = True

# Print on screen
print("Hola, soy", nombre, "y tengo", edad, "años.")

# Basic operators
a = 10
b = 3

print(a + b)  # 13
print(a - b)  # 7
print(a * b)  # 30
print(a / b)  # 3.3333...
print(a // b) # División entera -> 3
print(a % b)  # Módulo (resto) -> 1
print(a ** b) # Potencia -> 1000

# Control structures: if/else
if edad >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")

# For con rango
for i in range(5):
    print(i)

# While
contador = 0
while contador < 5:
    print(contador)
    contador += 1

# Lista
frutas = ["manzana", "banana", "cereza"]
print(frutas[0])  # manzana

# Diccionario (como objeto en JS)
persona = {"nombre": "Ana", "edad": 25}
print(persona["nombre"])  # Ana
