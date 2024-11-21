/* 
La idea aca es la de buscar todos los numeros que dividan al numero principal y despues de 
esos numeros verificar si son primos
// usar algo parecido a lo de recien pero en mes de sumar al arreglo restarle

let number = 15;
let dividers = [];
let primeDivisor = [1, 2, 3, 5];

function primeFactors(number, dividers, primeDivisor) {

for (let c = 0; c <= number; c++) {
        if (number % c === 0) {
            dividers.push(c);
        }
    }
    for(let x = 0; x <= dividers.length; x++){
        if(x % 2 !== 0 && x % 3 !== 0 && x % 5 !== 0){
            primeDivisor.push(x);
            console.log(primeDivisor);
        }
    }
    
    
}


primeFactors(number, dividers, primeDivisor)

/*for(let i = 0; 0 <= dividers.length ; i++){
    if(dividers[i] % 2 === 0){
        primeDivisor.push(dividers[i]);
        console.log(primeDivisor);
    }
}
*/
