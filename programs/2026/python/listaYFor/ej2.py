# Ejercicio 2
# Escribir un programa que almacene las asignaturas de un curso (por ejemplo Matemáticas,
# Física, Química, Historia y Lengua) en una lista y la muestre por pantalla el mensaje 
# Yo estudio
# <asignatura>, donde <asignatura> es cada una de las asignaturas de la lista.

def asignaturas():
    todas_las_asignaturas = []
    
    for i in range(99):
        asignatura = input("¿Decime una asignatura que estudias si no hay mas solo apreta enter? ")
        if asignatura == "":
            break
        todas_las_asignaturas.append(asignatura)
    
    print(f"Yo estudio {todas_las_asignaturas}")

asignaturas()