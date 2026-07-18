
string = "1234567890"
def changeOrder(arr):
    arr = list(arr)

    arr.reverse()

    arr = "".join(arr)

    return arr
print(changeOrder(string))


def invertirString(string):
    reves = ""
    for i in range(len(string)-1, -1, -1):
        reves += string[i]

    print(reves)

invertirString(string)
changeOrder(string)