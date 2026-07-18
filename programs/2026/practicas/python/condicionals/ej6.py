bill = input("What kind of bill is it? ")
subTotal = int(input("What the subTotal to pay? "))

if bill == "restaurante":
    print("The total to pay is ", subTotal * 1.1)
else:
    print("The total to pay is ", subTotal* 1.21)