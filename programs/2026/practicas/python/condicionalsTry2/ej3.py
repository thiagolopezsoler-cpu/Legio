import math

def calcular_hipotenusa():
    try:
        a = float(input("Cateto a: "))
        b = float(input("Cateto b: "))
        if a <= 0 or b <= 0:
            print("Error: los catetos deben ser mayores a cero")
        else:
            hipotenusa = math.sqrt(a**2 + b**2)
            print(f"Hipotenusa: {hipotenusa:.2f}")# la primer f le dice que va a poner variables dentro de {} y la segunda lo redondea a dos decimales
    except ValueError:
        print("Introduce valores numéricos válidos")

calcular_hipotenusa()