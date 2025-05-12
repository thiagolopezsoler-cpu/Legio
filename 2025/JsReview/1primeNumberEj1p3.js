couldItBePrime();

function couldItBePrime() {
    const readline = require('readline');
    const prime = [];
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    do {
        rl.question('Can you writen a number please? ', (number) => {
            number = parseInt(number);
            console.log("You entered: ", number);
            for (let x = 2; x < number; x++) {
                if (number % x === 0) {
                    prime.push(x);
                }
            }
            rl.close();
            console.log(prime.length > 0 ? `${number} is a prime number.` : `${number} is not a prime number.`);
        })
    }
while (number != 'back')
}