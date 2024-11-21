const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,140];


function CopyPairs(numbers){
    numberPairs = numbers.filter(number => number % 2 === 0)
    console.log(numberPairs);
}

CopyPairs(numbers);


/*const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,140];



function CopyPairs(number){
const newnumber = number.filter(number => number % 2 === 0);
console.log(newnumber)
}



CopyPairs(number);
*/
