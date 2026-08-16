def programa():
    notas = []
    try:
        for i in range(5):
            numero = int(input("Dame una nota: ").strip())
            if 0 <= numero <= 10:
                notas.append(numero)
                
            else:
                raise ValueError
    except ValueError:
        print("Esta mal el numero")
    mas_alto = 0
    for i in range(1,11):
        if i > mas_alto:
            mas_alto = i
    print(mas_alto)
    mas_bajo = 10
    for i in range(1,11):
        if i < mas_bajo:
            mas_alto = i
    print(mas_alto)
    contador = 1
    media = 0
    for i in range(1,11):
        for i in range(len(notas)):
            media += notas[i]
        media = media / len(notas)
        if notas[i] == media * contador:
            print(notas[i])
        else:
            contador += 1

    
programa()