# 6- Administrador de tareas:
# Permite al usuario agregar tareas con una descripción y una fecha de vencimiento.
# Muestra la lista de tareas agregadas.
# Permite al usuario marcar una tarea como completada y eliminar tareas de la lista.

tareas = []

while True:
    print("\n1. Agregar tarea")
    print("2. Ver tareas")
    print("3. Marcar tarea como completada")
    print("4. Eliminar tarea")
    print("5. Salir")

    opcion = input("Elegí una opción: ")

    if opcion == "1":
        descripcion = input("Descripción: ")
        tarea = [descripcion, False]  # False = no completada
        tareas.append(tarea)

    elif opcion == "2":
        for i in range(len(tareas)):
            estado = "✔" if tareas[i][2] else "✘"
            print(i, "-", tareas[i][0], "|", tareas[i][1], "|", estado)

    elif opcion == "3":
        num = int(input("Número de tarea a completar: "))
        if num < len(tareas):
            tareas[num][2] = True

    elif opcion == "4":
        num = int(input("Número de tarea a eliminar: "))
        if num < len(tareas):
            tareas.pop(num)

    elif opcion == "5":
        break