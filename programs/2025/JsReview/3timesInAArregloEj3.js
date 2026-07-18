function times() {
    const readline = require('readline');
    const arreglo = [7, 3, 563, 87, 2, 3, 45, 56, 67, 8, 4, 332, 123, 42, 544, 665, 7, 6, 23, 45, 2566765, 7543, 56];

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Can you pass me the number for search? ', (number) => {
        number = parseFloat(number);
        console.log(`You entered: ${number}`);
        const countToNumber = arreglo.reduce((count, plot) => {
            return plot === number ? count + 1 : count;
        }, 0);
        console.log(`The number ${number} appears ${countToNumber} times.`);
        rl.close();
    });
}

times();