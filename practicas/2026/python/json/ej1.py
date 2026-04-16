import json
# Abrir el archixvo JSON
with open('ej1.json', 'r', encoding='utf-8') as archivo:
    datos = json.load(archivo)
    
# Acceder a los datos
print("Nombre:", datos["nombre"])
print("Edad:", datos["edad"])
print("Ciudad:", datos["ciudad"])
