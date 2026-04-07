# 7- Calculadora de descuento de compra:
# Solicita al usuario que ingrese el precio original del artículo y el porcentaje de descuento.
# Calcula el precio final después del descuento.
# Muestra el precio final al usuario.

precio = float(input("Ingresa el precio original: "))
descuento = float(input("Ingresa el porcentaje de descuento: "))

def calcular(precio, descuento):
    total_descuento = precio * descuento / 100
    precio_final = precio - total_descuento
    print("Precio final:", precio_final)

calcular(precio, descuento)