// reacer por ecxeso de chatgpt
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




