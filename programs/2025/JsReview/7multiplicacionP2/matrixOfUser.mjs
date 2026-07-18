const readline = require('readline');

export async function getUserMatrices() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        rl.question('Enter first matrix (JSON format, e.g. [[1,2],[3,4]]): ', (matrixA) => {
            rl.question('Enter second matrix: ', (matrixB) => {
                try {
                    matrixA = JSON.parse(matrixA);
                    matrixB = JSON.parse(matrixB);
                    rl.close();
                    resolve({ matrixA, matrixB });
                } catch (error) {
                    console.log('Invalid format. Please enter a valid JSON array.');
                    rl.close();
                    reject(error);
                }
            });
        });
    });
}