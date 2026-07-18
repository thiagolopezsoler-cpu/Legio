const isPrime = require('./isPrime');

// console.log(isPrime.couldBePrime(7));    

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Whith is the number you want to know if is prime? ', (number) => {
    console.log(isPrime.couldBePrime(Number(number)));
    rl.close();
});