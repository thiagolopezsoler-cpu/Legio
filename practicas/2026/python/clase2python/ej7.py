
# 7. Escribe un programa que recorra una cadena de 
# texto y cuente cuántas veces aparece la letra 'a' en la cadena.


frutas = ["anana", "manzana", "banana", "piña", "coco", "naranja"]

for i in range(len(frutas)):
    contador += frutas[i].count("a")
print(contador)