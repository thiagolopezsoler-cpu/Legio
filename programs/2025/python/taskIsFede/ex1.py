# arr = [1, 9 , 5, 2, 5]
# secondCounr = 0
# count = 0
# for i in range(len(arr)):
#     if arr[i] > count:
#         count = arr[i]
#         arr[i] = count
# print("The new arr:", arr) 
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# arr.sort()

# arrCopy = []
for i in range(len(arr) - 1):
    for i in range(len(arr) - 1):
        if arr[i] < arr[i + 1]:
            count = arr[i + 1] 
            arr[i + 1] = arr[i]
            arr[i] = count
# arrCopy = arr
print("The new arr:", arr)
