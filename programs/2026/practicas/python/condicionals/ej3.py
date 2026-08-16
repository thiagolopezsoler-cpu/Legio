import math

leg1 = float(input("How long is leg 1? "))
leg2 = float(input("How long is leg 2? "))

hypotenuse = math.sqrt(leg1**2 + leg2**2)#**0.5

print("The hypotenuse value is ", hypotenuse)