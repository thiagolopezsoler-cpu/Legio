# 1. Define una lista de diccionarios que 
# represente información personal.
# nombre,edad. Luego, accede a
# elementos específicos de la lista, 
# como el primer diccionario, el nombre 
# de la primera persona y la edad de la 
# segunda persona, para finalmente imprimir
# los resultados en la consola.

personas = [
    {"nombre": "Thiago", "edad": 16},
    {"nombre": "María", "edad": 15},
    {"nombre": "Lucas", "edad": 17}
]

primera_persona = personas[0]["nombre"]
print(primera_persona)

edad_segunda_persona = personas[0]["edad"]
print(edad_segunda_persona)

for persona in personas:
    for k, v in persona.items():
        print(f"{k}:{v}")
        print()