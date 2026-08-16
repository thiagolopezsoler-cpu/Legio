operacion = int(input("¿Qué operación matemática desea realizar? Ponga 1 para suma, 2 para resta, 3 para potencia, 4 para multiplicación y 5 para división: "))

if operacion < 1 or operacion > 5:
    print("Ingrese un número válido por favor")
else:
    if operacion == 1:  # Suma
        numero1 = int(input("Ingrese el primer número a sumar: "))
        numero2 = int(input("Ingrese el segundo número a sumar: "))
        print(f"El resultado de la suma es: {numero1 + numero2}")
    else:
        if operacion == 2:  # Resta
            numero1 = int(input("Ingrese el primer número a restar: "))
            numero2 = int(input("Ingrese el segundo número a restar: "))
            print(f"El resultado de la resta es: {numero1 - numero2}")
        else:
            if operacion == 3:  # Potencia
                numero1 = int(input("Ingrese el número del que quieres la potencia: "))
                print(f"La potencia de {numero1} es igual a {numero1 * numero1}")
            else:
                if operacion == 4:  # Multiplicación
                    numero1 = int(input("Ingrese el primer número a multiplicar: "))
                    numero2 = int(input("Ingrese el segundo número a multiplicar: "))
                    print(f"El resultado de la multiplicación es: {numero1 * numero2}")
                else:
                    if operacion == 5:  # División
                        numero1 = int(input("Ingrese el primer número a dividir: "))
                        numero2 = int(input("Ingrese el segundo número: "))
                        if numero2 != 0:
                            print(f"El resultado de la división es: {numero1 / numero2}")
                        else:
                            print("No se puede dividir entre 0")