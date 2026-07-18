def tarifa_polideportivo(edad, trabaja, tarifa_base):
    if edad >= 18 and trabaja:
        pago = tarifa_base
    elif edad < 18 and trabaja:
        pago = tarifa_base * 0.95
    elif edad >= 18 and not trabaja:
        pago = tarifa_base * 0.75
    else:  # menor y no trabaja
        pago = tarifa_base * 0.50

    print(f"Debe pagar: {pago:.2f} €")

# Ejemplo
edad = int(input("Edad: "))
trabaja = input("Trabaja? (si/no): ").lower() == "si"
tarifa_base = 100  # puedes cambiar
tarifa_polideportivo(edad, trabaja, tarifa_base)