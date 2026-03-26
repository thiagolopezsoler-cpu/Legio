const testArray = [12, 5, 8, 12, 99, 5, 42, 12, 7, 5, 99, 42, 12, 1, 5];
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Can you writen a number please? ', (number) => {
    number = parseInt(number);
    console.log("You entered:", number);
    
    const filteredArray = testArray.filter(numberOfArray => numberOfArray < number);
    
    console.log('the numbers lower to that are ' + filteredArray);
    rl.close();
});

