/*_La idea aca seria tener un String que contenga la palabra a modificar y un Int que tenga la posicion a mover 
de eso detectar donde esta ubicada cada una de las palabras del String dejar eso en un nuevo let que depues al le le sumo lo que tenga el
int posteriormente buscamos la position del nuevo let y las busco cada una en el let del abecedario*/

/* la idea seria usar mas el es6 */
let distance = 3;
let word = "Legio";
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphabetlength = alphabet.length;
let conteiner = [];

function rotString(word, distance) {
  //transformo las palabras para que sean legibles para la maquina
  wordLowerCase = word.toLowerCase();

  wordInArrays = wordLowerCase.split("");
  alphabetInArrays = alphabet.split("")

  console.log(wordInArrays);
  console.log(alphabetInArrays);

  //busco la positions of the letter from word but in the alphabet
  positionLetter = wordInArrays.map(letter => alphabet.indexOf(letter))
  console.log(positionLetter);

  //Sumo la posicion a las posiciones para posteriormente buscarlas en el alphabet
  newPosition = positionLetter.map(number => number += distance);
  console.log(newPosition);


  newWord = newPosition.map(newNumber => alphabet[newNumber]);
  console.log(newWord);

}

rotString(word, distance);







/* reacer por exceso de chatgpt
function rotString(cadena, desplazamiento){
  const alfabeto = "abcdefghijklmnopqrstuvwxyz";
  const longitudAlfabeto = alfabeto.length;
  
  return cadena.split("").map(caracter =>{
    let esMayuscula= caracter === caracter.toUpperCase();
    caracter = caracter.toLowerCase();
    
    
    let indiceActual = alfabeto.indexOf(caracter);
    
    if (indiceActual === -1) return caracter;
    
    
    let nuevoIndice = (indiceActual + desplazamiento) % longitudAlfabeto;
    
    if (nuevoIndice < 0) nuevoIndice += longitudAlfabeto;
    
    
    let nuevoCaracter = alfabeto[nuevoIndice];
    return esMayuscula ? nuevoCaracter.toUpperCase() : nuevoCaracter;
}).join("");
}

console.log(rotString("Legio", 3));  // "Ohjlr"
console.log(rotString("Legio", -3)); // "Ibdfl"
let word = "iphone";
let position = 1;


function rotString(word, position){
  const alfabeto = "abcdefghijklmnopqrstuvwxyz";
  const longitudAlfabeto = alfabeto.length;

  const wordWithToLowerCase = word.toLowerCase();
  console.log(wordWithToLowerCase);
}

rotString();





/*
function rotString(word, distance){
let wordinlower = word.toLowerCase();
let wordArray = wordinlower.split("");
let arrayofalphabet = alphabet.split("");

for(let c = 0 ; c < wordArray.length ; c ++){
let position = alphabet.indexOf(wordArray[c]) + distance;
console.log(arrayofalphabet[position]);
conteiner.push(arrayofalphabet[position]);
}
console.log(conteiner)
}
rotString(word, distance);
*/