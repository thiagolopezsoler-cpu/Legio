


function couldItBePrime() {
    const readline = require('readline');//here i am anable for lisen to the user
    const verificationNumberArreglo = [];
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Can you give me a number so I can check? ', (pendingNumber) => {
        for (let verificationNumber = 2; verificationNumber < pendingNumber; verificationNumber++) {
            verificationNumberArreglo.push(verificationNumber);
        }
        let filter = verificationNumberArreglo.filter(number => pendingNumber % number === 0);
        console.log(filter)
        return filter.length > 0 
    ? console.log('The number isn’t prime because it can be divided by ' + filter)
    : console.log('The number is prime');
        rl.close();
    })
}
couldItBePrime();