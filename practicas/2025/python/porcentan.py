def porcentaje_completado(letra_actual):
    abecedario = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]

    letra_actual = letra_actual.lower()

    if letra_actual not in abecedario:
        return "Letra no válida."

    posicion = abecedario.index(letra_actual) + 1  # +1 porque empieza desde 1
    total = len(abecedario)
    porcentaje = (posicion / total) * 100

    return f"Completaste el {porcentaje:.2f}% del abecedario."

# Ejemplo de uso:
letra = input("¿En qué letra vas? ").strip()
print(porcentaje_completado(letra))
