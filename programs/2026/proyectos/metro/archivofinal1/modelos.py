class Estacion:
    def __init__(self, nombre, accesos_str):
        self.nombre = nombre
        self.accesos = [a.strip() for a in accesos_str.split(",") if a.strip()]

class Tren:
    def __init__(self, id_tren):
        self.id_tren = id_tren
        self.linea = None  

class Linea:
    def __init__(self, nombre):
        self.nombre = nombre  
        self.estaciones = []  
        self.trenes = []      

    def validar_flota(self):
        num_estaciones = len(self.estaciones)
        num_trenes = len(self.trenes)
        if num_estaciones == 0:
            return False
        return num_estaciones <= num_trenes <= (num_estaciones * 2)

    def obtener_todos_accesos(self):
        lista_accesos = []
        for estacion in self.estaciones:
            for acceso in estacion.accesos:
                lista_accesos.append(f"{acceso} ({estacion.nombre})")
        return lista_accesos