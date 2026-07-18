# fahrenheit = (celsius * 9/5) + 32
# celsius = (fahrenheit - 32) * 5/9
# kelvin = celsius + 273.15
# celsius = kelvin - 273.15

def conversor_unidades(opcion, temperatura):
    try:
        temperatura = float(temperatura)
        if opcion == "celsius a fahrenheit":
            fahrenheit = (temperatura * 9/5) + 32
            print(f"Los fahrenheit son {fahrenheit:.2f}")
        elif opcion == "fahrenheit a celsius":
            celsius = (temperatura - 32) * 5/9
            print(f"Los celsius son {celsius:.2f}")

        elif opcion == "celsius a kelvin":
            kelvin = temperatura + 273.15
            print(f"Los kelvin son {kelvin:.2f}")

        elif opcion == "kelvin a celsius":
            celsius = temperatura - 273.15
            print(f"Los celsius son {celsius:.2f}")
        else:
            print("La opcion ingresada es invalida")
    except ValueError:
        print("La temperatura ingresada es invalida")
opcion = input("Seleccione un opcion entre Celsius a Fahrenheit, Fahrenheit a Celsius, Celsius a Kelvin o Kelvin a Celsius. ").strip().lower()
temperatura = input("Cual es la temperatura(solo el numero) ")
conversor_unidades(opcion, temperatura)