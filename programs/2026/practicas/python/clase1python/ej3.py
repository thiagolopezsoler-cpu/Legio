# 3. Escribe un programa que realice operaciones
# aritméticas simples, como suma, resta, 
# multiplicación y división, utilizando 
# números enteros y flotantes.

number1 = int(input("What's the number 1?: "))
number2 = int(input("What's the number 2?: "))

operation = int(input("Enter 1 to add, 2 to multlipy, 3 to subtract and 4 to divide: "))

if operation == 1:
    print("The result is: ", number1 + number2)
elif operation == 2:
    print("The result is: ", number1 * number2)
elif operation == 3: 
    print("The result is: ", number1 - number2)
elif operation == 4:
    print("The result is: ", number1 / number2)
