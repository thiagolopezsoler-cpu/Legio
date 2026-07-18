const matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const matrixB = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];
const matrixResult = [[0,0,0],[0,0,0],[0,0,0]];

function multiplier (matrixA, matrixB, matrixResult){ 
    for(let rows = 0; rows < matrixA.length ; rows++){
        for(let columns = 0; columns < matrixA[rows].length; columns++){
            matrixResult[rows][columns] = matrixA[rows][columns] * matrixB[rows][columns];
        }
    }
    return matrixResult;
}
console.log(multiplier(matrixA, matrixB, matrixResult));