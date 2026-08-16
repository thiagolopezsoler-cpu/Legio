class Animal():
    def __init__(self, __nombre, __edad):
        self.__nombre = __nombre 
        self.__edad = __edad
    def get_nombre(self):
        return self.__nombre
    def get_edad(self):
        return self.__edad
    def hacer_sonido(self):
        print()
        
class Perro(Animal):
    def __init__(self, __raza):
        super().__init__(self, __nombre, __edad)
        self.__raza = __raza
    def hacer_sonido():
        print("guau, guau")
        
class Gato(Animal):
    def __init__(self, __color):
        super().__init__(self, __nombre, __edad)
        self.__color = __color
    def hacer_sonido():
        print("miau")

