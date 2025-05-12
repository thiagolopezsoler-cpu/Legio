const readline = require('readline');
const prime = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Can you writen a number please?', (number) => {
    number = parseInt(number);
    console.log("You entered:", number);
    
    for (let x = 2; x < number; x++) {
        if (number % x === 0) {
            prime.push(x);
        }
    }
    console.log(prime.length > 0 ? `${number} is a prime number.` : `${number} is not a prime number.`);
    rl.close();
});



/* couldItBePrime();

function couldItBePrime() {
    const readline = require('readline');
    const prime = [];
    let  number;
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    while(number != 'back'){
    rl.question('Can you writen a number please? ', (number) => {
        number = parseInt(number);
        console.log("You entered: ", number);
        for (let x = 2; x < number; x++) {
            if (number % x === 0) {
                prime.push(x);
            }
        }
        console.log(prime.length > 0 ? `${number} is a prime number.` : `${number} is not a prime number.`);
    })
}
rl.close();
}*/