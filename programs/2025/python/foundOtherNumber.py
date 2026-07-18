numbers = [3,5,1,7,3,4,2,1,5,6,2,5,6]

count = [];

for i in range(0, len(numbers)):
    if numbers[i] not in count:
        count.append(numbers[i])


for i in range(0, len(count)):
    if count[i] > count[i + 1]:
        numbers[i], numbers[i + 1] = numbers[i +1] , numbers[i]


print(f"The numbers are: {count}")