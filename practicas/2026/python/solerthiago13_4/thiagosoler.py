# LOPEZ SOLER, Thiago Valentin

# 17. HerramientasCrea una clase Herramienta con atributos como nombre y uso. Luego, crea clases derivadas
# como Martillo, Destornillador y Sierra, cada una con métodos específicos (ej: usar(), afilar()).

# diccionario = {"nombre": "Héctor", "edad": 30}
# def dict_to_json():

#tengo linux

class Herramienta():
    def __init__(self, nombre, uso):
        self.nombre = nombre
        self.uso = uso
        
class Martillo(Herramienta):
    pass 
    
    def usar(self):
        print(f"La herramienta {self.nombre} fue usada para clavar un clavo")
        
    # def afilar():
    #     print(f"La herramienta {self.nombre}fue afilada")
        
class Destornillador(Herramienta):
    pass

    def usar(self):
        print(f"Se saco un destornillador con un {self.nombre}")
        
        
class Sierra(Herramienta):
    pass
    def usar(self):
        print(f"Fue usada la {self.nombre}")
#with open (nombreArchivo, r/w, encoding:"ut8")

a = Sierra("sierra", "cortar madera")
a.usar()

b = Destornillador(Fhillisx, atornillar)
b.usar()