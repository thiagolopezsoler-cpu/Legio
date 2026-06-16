def calculadora():
    try:
        a = float(input("Ingrese el primer número: "))
        b = float(input("Ingrese el segundo número: "))
        print("Operaciones: 1: +  2: *  3: -  4: /")
        opcion = input("Selecciona una operación: ")

        if opcion == "1":
            print(f"Resultado: {a + b}")
        elif opcion == "2":
            print(f"Resultado: {a * b}")
        elif opcion == "3":
            print(f"Resultado: {a - b}")
        elif opcion == "4":
            if b != 0:
                print(f"Resultado: {a / b}")
            else:
                print("Error: división entre cero")
        else:
            print("Opción no válida")
    except ValueError:
        print("Por favor ingresa números válidos")

calculadora()