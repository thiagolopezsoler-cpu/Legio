# 2- Conversor de temperaturas:
# Pide al usuario que ingrese una temperatura en grados Celsius.
# Convierte la temperatura a grados Fahrenheit utilizando la fórmula: 
# Fahrenheit = (Celsius * 9/5) + 32.
# Imprime la temperatura en grados Fahrenheit.


temperatura_c = float(input("ingresa la temperatura"))

def conversor(temperatura_c):
    faherenheit = (temperatura_c * (9/5)) + 32
    print(faherenheit)
    
conversor(temperatura_c)