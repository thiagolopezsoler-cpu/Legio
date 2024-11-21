/**/

array1 = [
    [3, 1, 5],
    [4, 7, 2],
    [9, 8, 6]
];

array2 = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];

let square = true;

function magicSquare(array) {

    const sumOfRows = array.map(rows => rows.reduce((count, number) => count + number, 0,));
    
    const count = sumOfRows[0];
    
    const isMagicSquare = sumOfRows.every((rowsValue) => {
        return count === rowsValue;
})
    

    return isMagicSquare;

}
console.log(magicSquare(array1));
console.log(magicSquare(array2));







/*let suma = [];

array1 = [
    [3, 1, 5],
    [4, 7, 2],
    [9, 8, 6]
];

array2 = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];


function magicSquare(array1, suma) {

    for (let c = 0; c < array1.length; c++) {
        let fila = array1[c];
        suma.push(fila.reduce((count, number) => count + number));
    }

    if (suma[0] === suma[1] && suma[1] === suma[2]) {
        console.log("Es un cuadrado magico")
    }
    else {
        console.log("No es un cuadrado magico")
    }
}
magicSquare(array1, suma);*/