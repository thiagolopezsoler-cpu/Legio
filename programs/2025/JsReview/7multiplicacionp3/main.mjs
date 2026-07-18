const { getMatricesFromUser } = require('./inputMatrices');
const { multiplyMatrices } = require('./matrixMultiplication');

function main() {
    getMatricesFromUser((matrix1, matrix2) => {
        try {
            const result = multiplyMatrices(matrix1, matrix2);
            console.log("El resultado de la multiplicación de matrices es:");
            result.forEach(row => console.log(row.join(' ')));
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    });
}

main();