
year = int(input("Is the year lear? "))

if year % 4 != 0:
    print("The year is not a leap year (it has 365 days).")
elif year % 100 != 0:
    print("The year is a leap year (it has 366 days).")
elif year % 400 == 0:
    print("The year is a leap year (it has 366 days).")
else:
    print("The year is not a leap year (it has 365 days).")