const integers = [1,2,5,6,8,7,6];

function copyPairs (integers){
const evenNumbers = integers.filter(number => {
    return number % 2 === 0;
});
return evenNumbers;
}

console.log(copyPairs(integers))