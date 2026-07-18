function multiplyMatrices(matrix1, matrix2) {
    // Verificar si las matrices se pueden multiplicar
    if (matrix1[0].length !== matrix2.length) {
        throw new Error("El número de columnas de la primera matriz debe ser igual al número de filas de la segunda matriz.");
    }

    // Inicializar la matriz resultante con ceros
    const result = Array.from({ length: matrix1.length }, () => Array(matrix2[0].length).fill(0));

    // Multiplicar las matrices
    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix2[0].length; j++) {
            for (let k = 0; k < matrix2.length; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return result;
}

module.exports = { multiplyMatrices };