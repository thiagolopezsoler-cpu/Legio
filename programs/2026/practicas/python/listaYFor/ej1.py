# Ejercicio 1
# Escribir un programa que almacene las asignaturas de un curso (por ejemplo Matemáticas,
# Física, Química, Historia y Lengua) en una lista y la muestre por pantalla.

def materias():
    materia_usuario = {}
    for i in range(999):
        materia = input("(Escriba 'salir' para salir del programa) selecione la materia ").strip().lower()
        if materia != 'salir':
            alumnos = []
            for x in range(999):
                nota = input("(escriba 'salir' para salir de la materia)Escriba el nombre y nota del alumno ").strip().lower()
                if nota != 'salir':
                    alumnos.append(nota)
                else:
                    materia_usuario[materia] = alumnos
                    break
        else:
            break
    print(materia_usuario)
        
materias()