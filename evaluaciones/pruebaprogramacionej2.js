/*const pillo = [5,7,3,2,6,8,6,4,3,2,1];
const pollo = pillo.large

console.log(pollo)
*/
/* la idea seria la d filtrar las palabras capicuas con un
.filter y despues usar un reduce para acumulas las letras de todas las palabras*/

const words = ["civic", "apple", "radar", "banana", "level", "grape", "rotor"];


function letterBypalindromes(words) {

    const palindromes = words.filter(word => {
        let normalRoute = [];
        for (let x = 0; x < word.length; x++) {
            normalRoute.push(word[x]);
        }
        //console.log(normalRoute);

        let reverseRoute = [];
        for (let i = word.length - 1; i >= 0; i = i - 1) {
            reverseRoute.push(word[i]);
        }
        //console.log(reverseRoute)
        return JSON.stringify(normalRoute) === JSON.stringify(reverseRoute);
    })

    const numberOfLetter = palindromes.reduce((count, letter) => count + letter.length, 0,);

    return numberOfLetter;
    // console.log(palindromes);
    // console.log(numberOfLetter);
}
console.log("La cantidad de letras que contienen todas las palabras capicuas son " +
    letterBypalindromes(words));


/*Codigo hecho por chatgpt:
const words = ["civic", "apple", "radar", "banana", "level", "grape", "rotor"];

function letterBypalindromes(words) {
// Filtrar palabras palíndromas
const palindromes = words.filter(word => word === [...word].reverse().join(''));

// Sumar la longitud de todas las palabras palíndromas
const numberOfLetters = palindromes.reduce((count, word) => count + word.length, 0);

return numberOfLetters;
}

console.log("La cantidad de letras que contienen todas las palabras capicuas son " +
letterBypalindromes(words));

no esta mal la idea aunque no lo hice yo
*/