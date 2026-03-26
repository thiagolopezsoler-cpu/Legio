def suma_todos_numeros():
    try:
        numero = int(input("Ingresa el numero "))
        if numero >= 0:
                numeros = []
                suma = 0
                for i in range(numero + 1):
                    numeros.append(i)
                    suma += i
                print(f"Los numeros son {numeros}")
                print(f"El total es {suma:.f2}")
        else:
            print("El numero debe ser positivo")
    except ValueError:
        print("Introduce un numero valido")
        
suma_todos_numeros()