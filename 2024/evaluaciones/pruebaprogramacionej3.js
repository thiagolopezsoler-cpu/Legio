/*const personas = [ 
{ nombre: 'Juan', edad: 30 }, 
{ nombre: 'María', edad: 25 }, 
{ nombre: 'Pedro', edad: 35 } 
];

const nombresEnMayusculas = personas.map (personas => {
return {
nombre: personas.nombre.toUpperCase(),
}
});
console.log(nombresEnMayusculas);*/

const personas = [ 
    { nombre: 'Juan', edad: 30 }, 
    { nombre: 'María', edad: 25 }, 
    { nombre: 'Pedro', edad: 35 } 
    ];




const nameInUpperCase = personas.map(persona => {
    return {
        nombre: persona.nombre.toUpperCase(),
}})
console.log(nameInUpperCase);