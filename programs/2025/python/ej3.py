number = input("enter a number ")


with open("archivo.txt", "w") as file:
    file.write(number)

try: x = int(number)
except ValueError:
    print("The value is not a number")

with open("archivo.txt", "r") as file:
    content = file.read()
    print(content)