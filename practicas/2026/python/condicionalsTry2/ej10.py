def pedir_pizza():
    vegetariana = input("¿Quieres pizza vegetariana? (si/no): ").lower() == "si" # Estoy haciendo a vegetariana un valor booleano
    ingredientes_base = ["Mozzarella", "Tomate"]

    if vegetariana:
        print("Ingredientes vegetales disponibles: Pimiento, Tofu")
        eleccion = input("Elige un ingrediente: ")
    else:
        print("Ingredientes no vegetales disponibles: Peperoni, Jamón, Salmón")
        eleccion = input("Elige un ingrediente: ")

    ingredientes_base.append(eleccion)
    tipo = "vegetariana" if vegetariana else "no vegetariana"
    print(f"Tu pizza {tipo} lleva: {', '.join(ingredientes_base)}") 
"""💡 Resumen de lo que estás usando aquí:

Listas → append() para agregar elementos.

Condicional inline → x if condición else y.

f-strings → insertar variables en cadenas.

.join() → unir elementos de una lista en una sola cadena.

Esto es muy pythonico y profesional, exactamente como lo haría un desarrollador para mostrar resultados de forma clara."""

pedir_pizza()