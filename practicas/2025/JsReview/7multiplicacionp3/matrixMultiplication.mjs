export function multiplicarMatrices(matriz1, matriz2) {
    const filasMatriz1 = matriz1.length;
    const columnasMatriz1 = matriz1[0].length;
    const filasMatriz2 = matriz2.length;
    const columnasMatriz2 = matriz2[0].length;

    if (columnasMatriz1 !== filasMatriz2) {
        throw new Error("El número de columnas de la primera matriz debe ser igual al número de filas de la segunda matriz.");
    }

    const resultado = Array.from({ length: filasMatriz1 }, () => Array(columnasMatriz2).fill(0));

    for (let i = 0; i < filasMatriz1; i++) {
        for (let j = 0; j < columnasMatriz2; j++) {
            for (let k = 0; k < columnasMatriz1; k++) {
                resultado[i][j] += matriz1[i][k] * matriz2[k][j];
            }
        }
    }

    return resultado;
}