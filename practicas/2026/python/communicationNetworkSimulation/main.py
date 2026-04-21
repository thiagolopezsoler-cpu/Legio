import time

class Nodo:
    def __init__(self, nombre):
        self.nombre = nombre
        self.conexiones = []
    
    def agregar_conexion(self, nodo):
        self.conexiones.append(nodo)

    def enviar_mensaje(self, mensaje):
        for conexion in self.conexiones:
            conexion.recibir_mensaje(mensaje, self.nombre)
            
    def recibir_mensaje(self, mensaje, remitente):
        print(f"{self.nombre} recibió: '{mensaje}' de {remitente}")
        
    def eliminar_conexion(self, nodo):
        self.conexiones.remove(nodo)
            
        
        
servidor = Nodo("Servidor")
cliente1 = Nodo("Cliente 1")
cliente2 = Nodo("Cliente 2")
cliente3 = Nodo("Cliente 3")
servidor.agregar_conexion(cliente1)
servidor.agregar_conexion(cliente2)
servidor.agregar_conexion(cliente3)
servidor.enviar_mensaje("Hola clientes")

time.sleep(3)

servidor.eliminar_conexion(cliente1)
servidor.eliminar_conexion(cliente2)
servidor.eliminar_conexion(cliente3)

print("Simulando desconexión y reconexión dinámica…")

servidor.agregar_conexion(cliente1)
servidor.agregar_conexion(cliente2)
servidor.agregar_conexion(cliente3)
servidor.enviar_mensaje("Hola de nuevo a todos")