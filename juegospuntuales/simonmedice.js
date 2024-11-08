// es el arreglo q uso para guardar lo movimientos de la maquina 
let auxiliar = [];
//aca los del jugador
let movimientosocasionadosporelplayer = [];
//va adentro del auxiliar y es cada luz prendida
let numero;
let esperandoJugador = false; 


function setup() {
// Creo el canvas
createCanvas(1515, 703);
background(0);

// Creo los sprites
rojo = createSprite(500, 400, 200, 200);
verde = createSprite(500, 200, 200, 200);
azul = createSprite(700, 400, 200, 200);
amarillo = createSprite(700, 200, 200, 200);

// Les doy un color
rojo.shapeColor = color(255, 0, 0, 150);
verde.shapeColor = color(0, 255, 0, 150);
azul.shapeColor = color(0, 0, 255, 150);
amarillo.shapeColor = color(255, 255, 0, 150);

// Creo el botón
boton = createButton('Empezar');
boton.position(20, 20);
boton.mousePressed(empezargame);
console.log('entro al setup');
}

function empezargame() {
boton.remove();
console.log('empezó el juego');
setTimeout(() => cambiarcolor(auxiliar), 1000);

}


function draw() {
background(0);
drawSprites();
} 

function cambiarcolor(auxiliar) {

console.log('entro al if de generar number');
numero = floor(random(1, 5));
auxiliar.push(numero);
console.log('se generó el número ' + numero);
console.log('valor de auxiliar ' + auxiliar);
console.log('entro al cambiar color');
for (let x = 0; x < auxiliar.length; x++) {
let t1 = (x + 1) * 2000;
let t2 = t1 + 1000;

if (auxiliar[x] === 1) {
setTimeout(() => rojo.shapeColor = color(255, 0, 0, 250), t1);
setTimeout(() => rojo.shapeColor = color(255, 0, 0, 150), t2);
}
if (auxiliar[x] === 2) {
setTimeout(() => verde.shapeColor = color(0, 255, 0, 250), t1);
setTimeout(() => verde.shapeColor = color(0, 255, 0, 150), t2);
}
if (auxiliar[x] === 3) {
setTimeout(() => azul.shapeColor = color(0, 0, 255, 250), t1);
setTimeout(() => azul.shapeColor = color(0, 0, 255, 150), t2);
}
if (auxiliar[x] === 4) {
setTimeout(() => amarillo.shapeColor = color(255, 255, 0, 250), t1);
setTimeout(() => amarillo.shapeColor = color(255, 255, 0, 150), t2);
}
}
setTimeout(() => {
esperandoJugador = true;
console.log('El jugador puede jugar ahora.');
}, (auxiliar.length + 1) * 2000);
}

function player() {
console.log('el jugador puede jugar')
if (!esperandoJugador) return;


let t1 = 1000;

if (mouseIsPressed) {
if (mouseX > 500 - 100 && mouseX < 500 + 100 && mouseY > 400 - 100 && mouseY < 400 + 100) {
console.log('Sprite rojo presionado');
rojo.shapeColor = color(255, 0, 0, 250);
movimientosocasionadosporelplayer.push(1);
setTimeout(() => rojo.shapeColor = color(255, 0, 0, 150), t1);
}

if (mouseX > 500 - 100 && mouseX < 500 + 100 && mouseY > 200 - 100 && mouseY < 200 + 100) {
console.log('Sprite verde presionado');
verde.shapeColor = color(0, 255, 0, 250);
movimientosocasionadosporelplayer.push(2);
setTimeout(() => verde.shapeColor = color(0, 255, 0, 150), t1);
}

if (mouseX > 700 - 100 && mouseX < 700 + 100 && mouseY > 400 - 100 && mouseY < 400 + 100) {
console.log('Sprite azul presionado');
azul.shapeColor = color(0, 0, 255, 250);
movimientosocasionadosporelplayer.push(3);
setTimeout(() => azul.shapeColor = color(0, 0, 255, 150), t1);
}
if (mouseX > 700 - 100 && mouseX < 700 + 100 && mouseY > 200 - 100 && mouseY < 200 + 100) {
console.log('Sprite amarillo presionado');
amarillo.shapeColor = color(255, 255, 0, 250);
movimientosocasionadosporelplayer.push(4);
setTimeout(() => amarillo.shapeColor = color(255, 255, 0, 150), t1);
}
if (movimientosocasionadosporelplayer.length === auxiliar.length) {
esperandoJugador = false; // Bloquear la interacción del jugador
comparacion();
}
}
}

function comparacion(){
console.log('ya  no puede seguir el jugador')
if (JSON.stringify(auxiliar) === JSON.stringify(movimientosocasionadosporelplayer)) {
console.log('¡Secuencia correcta!');
cambiarcolor();
} else {
fill(255)
text('perdiste', 600,600)
}
}
