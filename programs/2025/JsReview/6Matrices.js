const matrix = [[1, 2], [3, 4]];
let sum = 0;

function search(matrix) {
    for (let x = 0; x < matrix.length; x++) {
        let row = matrix[x];
        for (let y = 0; y < row.length; y++) {
            sum += row[y];
        }
    }
    console.log(sum);
}

search(matrix); 