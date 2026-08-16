def adivina_numero():
    #try:
        #numero_secreto = int(numero_secreto)
        #if 1 > numero_secreto > 100:
            numero_anterior = 50
            numero = 50
            for i in range(7):
                pista = input(f"El numero elegido es {round(numero)}? responde con mayor, menos o correcto ").strip().lower()
                numero_anterior = (numero_anterior/2) 
                if pista == "mayor":
                    numero = numero_anterior + numero
                elif pista == "menor":
                    numero = numero - numero_anterior
                elif pista == "correcto":
                    return ("##### Vamosss #####")
                else:
                    return print("La respuesta no es valida")
            print("Perdi:(")
        #else:
         #   raise ValueError
    #except ValueError:
     #   print("El numero ingresado no es valido")    
        
#numero_secreto = input("Elige un numero entre 1 y 100(sin incluir 1 y 100) ")
adivina_numero()