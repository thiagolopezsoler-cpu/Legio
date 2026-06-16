def juego():
    jugador1 = input("Ingrese piedra, papel o tijera ").strip().lower()
    jugador2 = input("Ingrese piedra, papel o tijera ").strip().lower()
    
    if jugador1 == jugador2:
        print("Empataron")
    elif jugador1 == "piedra" and jugador2 == "tijera":
        print("Gano el jugador1")
    elif jugador1 == "piedra" and jugador2 == "papel":
        print("Gano el jugador2")
    elif jugador1 == "tijera" and jugador2 == "papel":
        print("Gano el jugador2")
    elif jugador1 == "tijera" and jugador2 == "piedra":
        print("Gano el jugador1")
    elif jugador1 == "papel" and jugador2 == "tijera":
        print("Gano el jugador2")
    elif jugador1 == "papel" and jugador2 == "piedra":
        print("Gano el jugador 1")
    else:
        print("Esta mal escrito")


juego()