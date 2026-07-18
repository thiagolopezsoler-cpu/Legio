n = int(input("Enter a number: "))

for i in range(1, n):
    print(" ".join(str(x) for x in range(1, i)))