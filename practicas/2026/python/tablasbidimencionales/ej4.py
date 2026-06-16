numeros = []

# Pedir números hasta que sea negativo
while True:
    num = int(input("Ingresá un número: "))
    
    if num < 0:
        break
    
    numeros.append(num)

# Crear nueva lista sin duplicados
sin_duplicados = []

for n in numeros:
    if n not in sin_duplicados:
        sin_duplicados.append(n)

# Mostrar resultado
print("\nLista original:", numeros)
print("Lista sin duplicados:", sin_duplicados)