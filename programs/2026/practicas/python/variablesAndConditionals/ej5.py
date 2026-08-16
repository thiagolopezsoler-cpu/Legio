def calculo_impuesto(ingreso_anual):
    try:
        ingreso_anual = int(ingreso_anual)
        if 0 < ingreso_anual < 10000:
            print(f"Los impuestos a pagar son {(ingreso_anual * 0.05):.2f}")
        elif 30000 > ingreso_anual >= 10000:
            print(f"Los impuestos a pagar son {(ingreso_anual * 0.15):.2f}")
        elif 30000 <= ingreso_anual < 100000:
            print(f"Los impuestos a pagar son {(ingreso_anual * 0.25):.2f}")
        elif ingreso_anual >= 100000:
            print(f"Los impuestos a pagar son {(ingreso_anual * 0.35):.2f}")
        else:
           print("El valor ingresado es invalido")
    except ValueError:
        print("El valor ingresado es invalido")

ingreso_anual = input("Ingrese el ingreso anual(solo numeros): ")
calculo_impuesto(ingreso_anual)