def factorial(numero):
    numero_factorial = 1
    try:
        numero = int(numero)
        for i in range(numero):
            numero_factorial = numero_factorial * (i + 1) #Alternativa más elegante: for i in range(1, numero + 1) → más claro que usar (i + 1).
        print(f"Su factorial es {numero_factorial}")
    except ValueError:
        print("Seleccione un numero valido")
        
numero = input("Ingrese un numero ")
factorial(numero)