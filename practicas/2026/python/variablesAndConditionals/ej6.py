def cajero(operacion, monto):
    try:
        monto = int(monto)
        dinero_disponible = 0
        if monto % 100 == 0:
            if operacion == "ingresar":
                if monto > 0:
                    dinero_disponible += monto
                    print(f"Se ingresaron a la cuenta {monto}")
                else:
                    print("El monto dinero en cuenta es insuficiente")
                
            elif operacion == "retirar":
                if dinero_disponible >= monto:
                    dinero_disponible -= monto
                    print(f"Se retiraron de la cuenta {monto}")
                else:
                    print("El monto es superior al valor en cuenta")
            else:
                print("La operacion ingresada es invalida")
        else:
            print("El monto ingresado no es divisible por 100") 
    except ValueError:
        print("El monto ingresado es invalido")  
        
operacion = input(":) ###Solo multiplos de 100### Selecione una operacion(retirar/ingresar) dinero: ").strip().lower()
monto = input("Selecione el monto: ")
cajero(operacion, monto)