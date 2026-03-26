def calcular_aplicar_descuento(cantidad):
    try:
        cantidad = int(cantidad)
        if cantidad <= 0:
            raise ValueError
        precios = []
        for i in range(cantidad):
            precio_unitario = float(input("Ingrese el precio de los productos de a uno "))
            if precio_unitario <= 0:
                raise ValueError
            else:
                precios.append(precio_unitario)
        if cantidad <= 10:
            descuento = 0
        elif cantidad <= 50:
            descuento = 0.1
        elif cantidad <= 100:
            descuento = 0.2
        elif cantidad > 100:
            descuento = 0.3
        suma = 0
        for i in range(len(precios)):
            suma += precios[i]      
        print(f"El total a pagar es {(suma * (1 - descuento)):.2f}")      
    except ValueError:
        print("El valor ingresado no es un numero, o es menor a 1")

cantidad = input("Ingrese la cantidad de productos ")
calcular_aplicar_descuento(cantidad)
