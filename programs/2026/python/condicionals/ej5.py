puntos = int(input("How much points do you have? "))

if puntos < 100:
    print("your decount is 10%")
elif puntos > 100 and puntos < 150:
    print("Your decount is 12%")
elif puntos == 150:
    print("Your decount is 15%")
elif puntos > 150:
    print("Your decount is 20%")
