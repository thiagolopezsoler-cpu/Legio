# 6. Escribe un programa que recorra una lista
# de números y muestre si cada número es par o impar.


frutas = ["anana", "manzana", "banana", "piña", "coco", "naranja"]

for i in range(len(frutas)):
    if frutas[i] % 2 == 0:
        print("es pas")
    else:
        print("inpar")