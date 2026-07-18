ages = [12, 17, 20, 30, 15]

def es_mayor_edad(edad):
    if edad >= 18:
        return True
    else: 
        return False
    
print(es_mayor_edad(20))

for edad in ages:
    if es_mayor_edad(edad):
        print(f"{edad} es mayor de edad")
    else: 
        print(f"{edad} es menor de edad")