/*const a = [7,4,2,1,9,5,15];


const b = 3; 

const IsDivisible = a.filter((a,b) => a % b === 0);
const gorra = IsDivisible.filter((IsDivisible) => a % 5 === 0);

console.log(gorra);

*/



const numberA = 6
const numberB = 5

const array = [7, 10, 4, 6, 2];


function isDivisible (numberA, numberB){
    return numberA % numberB === 0;
}

console.log(isDivisible(numberA, numberB));


function isDivisibleTheArray (array){
    return divibleForFive = array.filter(number => number % 5 === 0);
    
}

console.log("numeros del arreglo divisibles por 5 " + isDivisibleTheArray(array))