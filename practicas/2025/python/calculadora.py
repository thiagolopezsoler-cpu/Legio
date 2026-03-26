number1 = int(input("enter the first number: "))
number2 = int(input("enter the second number "))

operation = input("enter the operation you want to perform (+, -, *, /): ")

if operation == "+":
    print("the result is: ", number1 + number2)
elif operation == "-":
    print("the result is: ", number1 - number2)
elif operation == "*":
    print("the result is: ", number1 * number2)
elif operation == "/":
    print("the result is: ", number1/number2)
else: 
    print("invalid operation")
