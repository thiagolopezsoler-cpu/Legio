notes = [8,9,4, 9, 7, 7, 6, 9, 8, 8, 9, 7, 9]

count = 0
for x in range(len(notes)):
    count += notes[x]
count = count / len(notes)
print(count)