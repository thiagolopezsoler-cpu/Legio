import { getUserMatrices } from "./matrixOfUser.mjs";
import { multiplier } from "./multiplication.mjs";
async function main() {
    try {
        const matrices = await getUserMatrices();
        console.log('Matrix A:', matrices.matrixA);
        console.log('Matrix B:', matrices.matrixB);
    } catch (error) {
        console.error('Error al obtener las matrices:', error);
    }
}

main();