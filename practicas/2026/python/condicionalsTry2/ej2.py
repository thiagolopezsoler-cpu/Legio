def verificar_edad():
    try: # hace que el codigo no se rompa bruscamente
        edad = int(input("Ingresa tu edad: "))
        if edad >= 18:
            print("Puedes acceder a la fiesta nocturna de BigBayData.com")
        else:
            print("No puedes acceder, eres menor de edad")
    except ValueError: #Le da un mensaje amigable al usuario 
        print("Por favor ingresa un número válido")

verificar_edad()