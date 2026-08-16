const { createInterface } = require("readline");

const testArray = [12, 5, 8, 12, 99, 5, 42, 12, 7, 5, 99, 42, 12, 1, 5];


function multiplier(testArray) {
    const multiplierForFive = testArray.map(number => {
        return number * 5;
    });
    console.log(multiplierForFive);
}

multiplier(testArray);