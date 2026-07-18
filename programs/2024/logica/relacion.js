// Función para obtener la Unión de dos conjuntos
function union(conjuntoA, conjuntoB) {
    return [...new Set([...conjuntoA, ...conjuntoB])];
}

// Función para obtener la Intersección de dos conjuntos
function interseccion(conjuntoA, conjuntoB) {
    return conjuntoA.filter(elemento => conjuntoB.includes(elemento));
}

// Función para obtener el Universo de dos conjuntos (Asumiendo que el universo es la unión)
function universo(conjuntoA, conjuntoB) {
    return union(conjuntoA, conjuntoB); // El universo en este caso es la unión de ambos
}

// Ejemplo de uso:
const conjunto1 = [1, 2, 3, 4];
const conjunto2 = [3, 4, 5, 6];

console.log("Unión: ", union(conjunto1, conjunto2)); // [1, 2, 3, 4, 5, 6]
console.log("Intersección: ", interseccion(conjunto1, conjunto2)); // [3, 4]
console.log("Universo: ", universo(conjunto1, conjunto2)); // [1, 2, 3, 4, 5, 6]