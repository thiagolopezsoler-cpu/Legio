# Crear listas para guardar los datos
equipos = []
resultados = []

# Pedir datos de los 15 partidos
for i in range(15):
    print("Partido", i + 1)
    
    equipo1 = input("Nombre del primer equipo: ")
    equipo2 = input("Nombre del segundo equipo: ")
    
    goles1 = int(input("Goles del primer equipo: "))
    goles2 = int(input("Goles del segundo equipo: "))
    
    # Guardar datos
    equipos.append([equipo1, equipo2])
    resultados.append([goles1, goles2])
    
    print()

# Mostrar la quiniela
print("\n--- QUINIELA DE LA JORNADA ---")

for i in range(15):
    print(
        equipos[i][0], resultados[i][0],
        "-",
        resultados[i][1], equipos[i][1]
    )