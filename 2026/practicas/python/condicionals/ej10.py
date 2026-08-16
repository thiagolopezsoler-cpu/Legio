pizza = input("do you want a vegetari pizza? ")

if pizza == "yes":
    ingredient = input("You can chosse one ingredients between are pepper and tofu ")
    print("Your pizza is vegetari with ", ingredient, "tomato and mozarrella")
elif pizza == "not":
    ingredient = input(" You can chosse between Pepperoni, Ham or Salmon.")
    print("Your pizza is common with ", ingredient, "tomato and mozarrella")
    