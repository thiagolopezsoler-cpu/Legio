word = 'legio';
distance = 4;

function rotString(word, distance) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lengthOfAlphabet = alphabet.length
    const wordModified = word.toLowerCase().split('');

    const rotatedWord = wordModified.map(letter => {
        const position = alphabet.indexOf(letter); // Buscar la posición de la letra en el alfabeto
        if (position === -1) return letter; // Si no es una letra (por ejemplo, un espacio), devolverla tal cual
        return alphabet[(position + distance) % lengthOfAlphabet]; // Calcular la nueva posición después de la rotación
    
    return rotatedWord;
    });
}
console.log(rotString(word, distance));