class Magician:
    def __init__(self, nombre, ataque, defensa):
        self.nombre = nombre
        self.ataque = ataque
        self.defensa = defensa
    
    def showInformation(self):
        print(self.nombre, self.ataque, self.defensa)

    def spells(self):
        print("You threw a spell very powerfull")

class Warrior:
    def __init__(self, nombre, ataque, defensa):
        self.nombre = nombre
        self.ataque = ataque
        self.defensa = defensa
    
    def showInformation(self):
        print(self.nombre, self.ataque, self.defensa)
    
    def defense(self):
        print("You defended your self pretty well")


class Elf:
    def __init__(self, nombre, ataque, defensa):
        self.nombre = nombre
        self.ataque = ataque
        self.defensa = defensa
    
    def showInformation(self):
        print(self.nombre, self.ataque, self.defensa)

    def aura(self):
        print("You gave off a lot of aura, well done")


class DarkLord(Elf, Magician):
        pass

class DarkLord(Magician, Elf):
        pass