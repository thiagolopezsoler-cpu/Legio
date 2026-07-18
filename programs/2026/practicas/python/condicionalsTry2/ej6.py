def calcular_precio_final():
    try:
        tipo = input("Tipo de factura (general/restaurante): ").strip().lower()
        valor = float(input("Valor de la factura: "))
        if tipo == "restaurante":
            iva = 0.10
        else:
            iva = 0.21
        precio_final = valor * (1 + iva)
        print(f"Precio final: {precio_final:.2f} €")
    except ValueError:
        print("Introduce un número válido")

calcular_precio_final()