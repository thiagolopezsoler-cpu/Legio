operacion = int(input("¿Qué operación matemática desea realizar? Ponga 1 para suma, 2 para resta, 3 para potencia, 4 para multiplicación y 5 para división: "))
if operacion == 1:  # Cambié = por ==
    numero1 = int(input("Ingrese el primer número a sumar: "))
    numero2 = int(input("Ingrese el segundo número a sumar: "))
    print(f"El resultado de la suma es: {numero1 + numero2}")
else:
    if operacion == 2:
        numero1 = int(input("Ingrese el primer número a restar: "))
        numero2 = int(input("Ingrese el segundo número a restar: "))
        print(f"El resultado de la resta es: {numero1 - numero2}")
    else:
        if operacion == 3:
            numero1 = int(input("ingrese el numero del que queres la potencia"))
            print(f"la potencia de {numero1} es igual a {numero1 * numero1}")