const matrix = [
    [2, 4, 5],
    [3, 0, 4],
    [2, 4, 5],
    [0, 4, 5],
    [1, 1, 4]
];



// const rows = () =>{
//     let numbersRows = []
//     let numbersColums = []
//     matrix.map((colum, index) => {
//         colum.map((row, index) => {
//             for(x = 0; x < colum.length; x ++){
//                 numbersRows.push(row)
//             }
//         })
//     })
// }
const rows = () =>{
    let numbersRows = []
    let numbers = []

    matrix.map(colum => {
        colum.map(number => {
            numbersRows.push(number)
        })
    })

    matrix.map(number, index => {
        numbersRows.map(x, i => {
            if(x == x + 1){
                numbers.push(x)
            }
            if(x == 0 ){
                numbers.push(x)
            }
        })
    })
}
console.log("El mayor numero pocible es" + numbers)