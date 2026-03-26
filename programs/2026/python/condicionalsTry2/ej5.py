def calcular_descuento(puntos, precio):
    if puntos < 100:
        descuento = 0.10
    elif 100 <= puntos < 150:
        descuento = 0.12
    elif puntos == 150:
        descuento = 0.15
    else:
        descuento = 0.20

    precio_final = precio * (1 - descuento)
    print(f"Precio final: {precio_final:.2f} €")

# Ejemplo
puntos = int(input("Introduce tus puntos: "))
precio = float(input("Introduce precio de compra: "))
calcular_descuento(puntos, precio)