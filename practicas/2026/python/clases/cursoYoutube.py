class Personaje:
    def __init__(self, nombre, inteligencia, poder, vida):
        self.nombre = nombre
        self.inteligencia = inteligencia
        self.poder = poder 
        self.vida = vida
        
    def atributos(self):
        print(self.nombre, ":", sep="")
        print(f"inteligencia = {self.inteligencia}")
        print(f"fuerza {self.poder}")
        print(f"vida {self.vida}")
    
    def subir_nivel(self, inteligencia, poder):
        self.inteligencia = self.inteligencia + inteligencia
        self.poder = self.poder + poder 
    
    def esta_vivo(self):
        return self.vida > 0
    
    def esta_muerto(self):
        self.vida = 0
        
    def atacar(self, enemigo):
        if self.poder > enemigo.vida:
            enemigo.vida = enemigo.vida - self.poder
        
class Mago(Personaje):
    def __init__(self, nombre, inteligencia, poder, vida, libro):
        super().Personaje(nombre, inteligencia, poder, vida)
        self.libro = libro
    
    def atributos(self):
        super().atributos()
        print(libro)
        
    def atacar(self):
        if self.poder * libro > enemigo.vida:
            enemigo.vida = enemigo.vida - self.poder * libro
    
    
mi_personaje = Mago("Legio",50, 50, 50, 3)
mi_personaje.atributos()
mi_personaje.subir_nivel(1,2)