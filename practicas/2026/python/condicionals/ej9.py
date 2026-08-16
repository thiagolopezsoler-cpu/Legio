age = input("Are you adult? ")
job = input("Do you work? ")
price = int(input("What's the price "))

if age == "yes" and job == "yes":
    print("You pay 100% (", price, ")")
elif age == "yes" and job == "not":
    print("You pay 95% (", (price * 0.95), ")")
elif age == "not" and job == "yes":
    print("You pay 75% (", (price * 0.75) ,")")
elif age == "not" and job == "not":
    print("you pay 50% ( ", (price * 0.5) ,")")