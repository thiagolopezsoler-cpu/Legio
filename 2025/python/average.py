notes = [9,7,6,2,10, 1, 8, 9, 9, 5, 7, 3]

# total = 0

# for note in notes:
#     total += note

# average = round(total / len(notes), 1 )
average = round(sum(notes)/ len(notes), 1)
print(f"The average is {average}")
