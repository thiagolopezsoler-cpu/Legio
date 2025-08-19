arr = [3, 5, 6, 2, 1, 4]

def check (arr):
    count = 0
    for i in range(len(arr) - 1):
        count += arr[i]

    n =  int(input("enter a number: "))
    if n > count:
        return False
    else: 
        for i in range(len(arr) - 1):
            if arr[i] > n:
                arr[i] = arr[i] - n
            else:
                print(arr[i])
                n -= arr[i]
                arr[i] = 0
    return True
        

print(check(arr))