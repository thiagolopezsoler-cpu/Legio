def tabla(numero): 
    try:
        numeros = []
        for i in range(10):
            numeros.append(numero * ( i + 1) )
        print(f"Su tabla es {numeros}")
    except ValueError:
        print("Ingrese un numero valido")
        
numero = int(input("Ingrese un numero "))
tabla(numero)