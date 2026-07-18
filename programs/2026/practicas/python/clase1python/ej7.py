# 7. crear un programa que le pida al usuario
# nombre, edad y ciudad de residencia, realizar
# cálculos basados en la edad, y luego mostrará
# la información en pantalla 
# (# Pedir al usuario que ingrese su nombre
# # Pedir al usuario que ingrese su edad
# # Pedir al usuario que ingrese su ciudad de residencia
# # Calcular el año de nacimiento
# # Saludar al usuario y mostrar la información
# # Comprobar si la edad es mayor de 18 años
# # Comprobar si la edad es un múltiplo de 5).

edad = input("Ingresa tu edad ")
residencia = input("ingrasa tu lugar de residencia ")
nombre = input("ingresa tu nombre")

año_nacimiento = 2026 - edad
if edad > 18:
    print("sos mayor de 18")
if edad % 5 == 0:
    print("Tu edad es multiplo de 5")