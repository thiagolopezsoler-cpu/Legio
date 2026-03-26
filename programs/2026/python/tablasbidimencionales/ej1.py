matriz = [[1,0,0,0,1], [0,1,0,1,0], [0,0,1,0,0],[0,1,0,1,0], [1,0,0,0,1]]

for i in range(len(matriz)):
    for x in range(len(matriz[i])):
        print(matriz[i][x], end = " ")
    print()