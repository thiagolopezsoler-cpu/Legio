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

export async function multiplier(matrixA, matrixB) {
    let matrixC = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    for (let x = 0; x < matrixA.length; x++) {
        for (let y = 0; x < matrixB.length; y++) {
            matrixC[y][x] = matrixA[x][y] + matrixB[y][x];
        }
    } 
}vvvbb
console.log(multiplier(matrixA, matrixB));