from datetime import datetime

def validacion_fecha(fecha):
    try:
        fecha_obj = datetime.strptime(fecha, "%d/%m/%Y")
        print(f"La fecha {fecha_obj} es correcta")
    except ValueError:
        print("La fecha es incorrecta")
        
fecha = input("Ingrese la fecha(ej: 12/2/2000) ")
validacion_fecha(fecha)