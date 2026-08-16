# 3. Contar palabras

oracion = input("Escribe una frase ")

def contador_palabras(oracion):
    contador = 0
    for i in range(len(oracion)):
        if oracion[i] != " ":
            contador += 1
    print(contador)
contador_palabras(oracion)