SITUACIONES_ECONOMICAS = ["baja", "media", "alta"]

def califica_beca(promedio, situacion):
    try:
        promedio = float(promedio)
        if situacion in SITUACIONES_ECONOMICAS:
            if promedio >= 7.5:
                if promedio >= 8.5 and situacion == "baja":
                    print("##### Calificas para la beca completa, felicidades #####")
            elif situacion == "media":
                print("###### Felicidades, calificaste para la beca parcial ######")
            else:
                print("Por el momento no calificas para la beca")
        else:
            print("La situacion economica no es valida")
            return            
    except ValueError:
        print("Ingrese un valor valido")

promedio = input("Cual es el promedio(ej: 8.5)? ")
situacion_economica = input("Como es la situacion economica(baja/media/alta)? ").strip().lower()
califica_beca(promedio, situacion_economica)