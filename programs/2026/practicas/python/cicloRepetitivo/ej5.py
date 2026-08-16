def promedio(numeros):
    promedio = 0
    try:
        for numero in numeros:
            numero = int(numero)
            promedio += numero
        promedio = promedio / len(numeros)
        print(f"El promedio de los numero que ingresaste es {promedio:.2f}")
    except ValueError:
        print("Ingresaste numeros invalidos")
    
numeros = []
for i in range(5):
    numeros.append(input("Ingresa un numero "))
promedio(numeros)