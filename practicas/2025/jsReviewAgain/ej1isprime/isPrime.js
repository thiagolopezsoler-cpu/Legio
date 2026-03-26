
// function functionIsPrime(number) {
//     if (number > 1) {
//         for (let x = 2; x < number; x++) {
//             if (number % x === 0) {
//                 console.log('the number isn´t prime')
//             }
//             else { console.log('the number is prime') };
//         };
//     }
//     else {
//         return console.log('the number isn´t prime')
//     }
// }

// module.export.functionIsPrime = functionIsPrime;


function couldBePrime(number) {
    let isPrime = true
    if (number < 1) {
        console.log('the number is incorrect')
    } else {
        for (let x = 2; x < number; x++) {
            if (number % x === 0) {
                isPrime = false
            }
        }
    }
    return true;
}

module.exports.couldBePrime = couldBePrime;