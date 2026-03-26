# 5.2 Escribe un programa verifique si una fruta 
# específica está en una lista de frutas y muestra
# un mensaje correspondiente.


frutas = ["anana", "manzana", "banana, piña", "coco", "naranja"]

try:
    frutas.index("d")
    
except ValueError:
    print("no esta")