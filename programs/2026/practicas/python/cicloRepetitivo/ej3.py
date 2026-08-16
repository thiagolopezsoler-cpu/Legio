def contar_vocales(palabra):
    cantidad_vocales = 0
    vocales = ["a","e","i","o","u"]
    
    for i in range(len(palabra)):
        for x in range(len(vocales)):
            if palabra[i] == vocales[x]:
                cantidad_vocales += 1
    print(f"La cantidad de vocales es {cantidad_vocales}")
                
    
    
palabra = input("Ingrese una palabra ").strip().lower()
contar_vocales(palabra)
"""for letra in palabra:
    if letra in vocales:
        cantidad_vocales += 1"""