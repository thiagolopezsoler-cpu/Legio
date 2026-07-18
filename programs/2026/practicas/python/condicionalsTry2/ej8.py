def es_bisiesto():
    try:
        año = int(input("Introduce un año: "))
        if (año % 4 == 0 and año % 100 != 0) or (año % 400 == 0):
            print(f"{año} es un año bisiesto")
        else:
            print(f"{año} no es un año bisiesto")
    except ValueError:
        print("Introduce un número válido")

es_bisiesto()