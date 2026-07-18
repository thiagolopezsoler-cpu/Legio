import readline from 'readline';

export async function pedirMatrices() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const matriz1 = [];
    const matriz2 = [];

    console.log("Ingrese la primera matriz (fila por fila, separadas por espacios). Deje una línea en blanco para finalizar.");
    while (true) {
        const fila = await new Promise(resolve => rl.question('Fila: ', resolve));
        if (fila.trim() === "") {
            break;
        }
        matriz1.push(fila.trim().split(' ').map(Number));
    }

    console.log("Ingrese la segunda matriz (fila por fila, separadas por espacios). Deje una línea en blanco para finalizar.");
    while (true) {
        const fila = await new Promise(resolve => rl.question('Fila: ', resolve));
        if (fila.trim() === "") {
            break;
        }
        matriz2.push(fila.trim().split(' ').map(Number));
    }

    rl.close();
    return [matriz1, matriz2];
}