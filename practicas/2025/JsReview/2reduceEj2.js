const arreglo = [5, 7, 2, 1, 7, 4, 78, 2, 4, 5, 3, 5375, 4, 3, 445, 7, 35];

function sumArray(arreglo) {
    return arreglo.reduce((acount, num) => acount + num, 0);
}

console.log(sumArray(arreglo));