let frutas = ["naranja", "manzana", "banana"];
let frutas2 = ["pera", "mandarina", "kiwi"];

//junta dos arreglos
let todasLasFrutas = frutas.concat(frutas2);
console.log(todasLasFrutas);

//da vuelta el arreglo
todasLasFrutas.reverse();
console.log(todasLasFrutas);

//ordena alfabeticamente
todasLasFrutas.sort();
console.log(todasLasFrutas);

//filtra todas las palabras con "n"
todasLasFrutasConLaN = todasLasFrutas.filter(fruta => fruta.includes("n"));
console.log(todasLasFrutasConLaN); 

//quita algo a un arreglo pero al inicio
todasLasFrutasConLaN.shift();
console.log(todasLasFrutas);


//agrega algo a un arreglo pero al inicio
todasLasFrutasConLaN.unshift("durazno");
console.log(todasLasFrutasConLaN);

todasLasFrutasConLaN.pop();
console.log(todasLasFrutasConLaN)

//agrega algo a un arreglo pero al final
todasLasFrutasConLaN.push("papa");
console.log(todasLasFrutasConLaN);

