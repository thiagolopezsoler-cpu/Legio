# 7. Integrador: Crear programa que permita
# al usuario agregar tareas con descripción, 
# fecha límite y prioridad, así como mostrar 
# la lista de tareas. 
# Este menú se repite hasta que el usuario elige salir."

def agregar_tarea(tareas, tarea, fecha_limite, prioridad):
    nueva_tarea = {"Tarea": tarea, "Fecha limite": fecha_limite, "Prioridad": prioridad}
    tareas.append(nueva_tarea)
    print("Tarea agregada exitosamente.")


def mostrar_tareas(tareas):
    if not tareas:
        print("No hay tareas pendientes.")
    else:
        for i, tarea in enumerate(tareas, 1):
            print(f"\nTarea {i}:")
            for clave, valor in tarea.items():
                print(f"{clave}: {valor}")


if __name__ == "__main__":
    lista_tareas = []

    while True:
        print("\n1. Agregar tarea")
        print("2. Mostrar tareas")
        print("3. Salir")

        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            tarea_nueva = input("Ingrese la descripción de la tarea: ")
            fecha_limite_nueva = input("Ingrese la fecha limite (formato: dd/mm/yyyy): ")
            prioridad_nueva = input("Ingrese la prioridad: ")
            agregar_tarea(lista_tareas, tarea_nueva, fecha_limite_nueva, prioridad_nueva)

        elif opcion == "2":
            mostrar_tareas(lista_tareas)

        elif opcion == "3":
            break

        else:
            print("Opción no válida. Intente nuevamente.")