# 8. Integrador:
# Escribe un programa que permita a un usuario crear
# una lista de nombres. El programa continuará pidiendo
# nombres hasta que el usuario ingrese "fin". Luego, 
# el programa mostrará la lista de nombres en orden alfabético,
# indicará cuántos nombres empiezan con la letra 'A' o 'E', 
# y mostrará si un nombre específico está en la lista.

nombres = []
while True:
    nombre = input("Ingrese un nombre(escriba fin para terminar): ").strip().lower()
    if nombre == "fin":
        break
    nombres.append(nombre)
    
nombres.sort()

print(nombres)
contadorA = 0
for i in range(len(nombres)):
    if nombres[i][0] == "a":
        contadorA += 1
    
print(contadorA)
contadorE = 0

for i in range(len(nombres)):
    if nombres[i][0] == "e":
        contadorE += 1
print(contadorE)

buscar = input("Ingrese un nombre a buscar: ").strip().lower()

if buscar in nombres:
    print("El nombre está en la lista")
else:
    print("El nombre NO está en la lista")