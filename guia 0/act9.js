// costo algo (timepo estimado 20 min)




function setup(){
createCanvas(windowWidth, windowHeight);
background(0);


fill(255);
textSize(80);
text('dame un numero', windowWidth /2 - 250, windowHeight/ 2 - 120);


input = createInput();
input.position(windowWidth /2 - 80, windowHeight/ 2 - 50);

button = createButton('enviar');
button.position(windowWidth /2 - 50, windowHeight/ 2 - 20);
button.mousePressed(ver);
}

function ver(){
console.log('toque el boton')
let l = 0
let y = input.value();

for(let x = 0; x < y.length; x++){

l += Number(y[x]);
}
console.log(l);
text(l, windowWidth /2 - 50, windowHeight/ 2 + 60);
}