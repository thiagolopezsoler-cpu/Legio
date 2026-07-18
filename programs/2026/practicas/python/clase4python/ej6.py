# 6. map() con lambda
numeros = [1, 2, 3, 4, 5]

# Sumar 10 a cada número usando lambda + map
resultado = list(map(lambda x: x + 10, numeros))

print(resultado)  # [11, 12, 13, 14, 15]