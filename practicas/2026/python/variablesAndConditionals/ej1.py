from datetime import datetime
from datetime import time

def calcular_costo_km(distancia):
    try:
        distancia = int(distancia)
        horario = datetime.now().time() #string format time, convertir hora en formato texto, %H = hora en formato 24 horas, : para que tenga esta separacion/formato, %M para que tenga los minutos
        horario_tarde_inicio = time(6, 0)
        horario_tarde_final = time(20, 0)
        #horario_noche_inicio = datetime.strptime("20:00", "%H:%M")
        #horario_noche_final =  datetime.strptime("6:00", "%H:%M")
        if horario >= horario_tarde_inicio:
            if horario <= horario_tarde_final:
                calcular_costo(distancia, 150)
            else:
                calcular_costo(distancia, 200)
        else:
            calcular_costo(distancia, 200)
    except ValueError:
        print("Distancia invalida")

def calcular_costo(distancia, pre):
    if distancia > 10:
        print(f"El precio total es ${(distancia * 1.1 * pre) + 500}")
    else:
        print(f"El precio total es ${(distancia * pre) + 500}")
        
distancia = input("Cual fue la distancia recorrida(en km) ")
# horario = input("Cual fue el horario de inicio(por ejemplo: 6:00) ")

calcular_costo_km(distancia)