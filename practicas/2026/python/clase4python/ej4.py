# 4. Verificación de Palíndromos

palabra = input("Dame una palabra ").lower().split()

alrevez = []
for i in range(len(palabra)):
    alrevez.append(palabra[i])
palabra_alrevez = "".join(alrevez)

if palabra_alrevez == palabra:
    print("son polindromas")
else:
    print("no son polindromos")