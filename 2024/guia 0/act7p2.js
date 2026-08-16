// problemas con los nombres, algo de dificultad pero nada lejos de mi alcanse (tiempo estimado 36 min)

let number = 0



function setup(){
number = floor(random (1,100));
console.log(number);

createCanvas(windowWidth, windowHeight);
background(0);

fill(255);
textSize(50);
text ('Adivina el numero',windowWidth/ 2- 200, windowHeight/2 -200 )


rect(windowWidth/ 2 - 100, windowHeight/2 + 50 -200, 200, 200)

fill(0);
textSize(250);
text('?', windowWidth/ 2 - 60, windowHeight/2 + 30 )

input = createInput();
input.position(windowWidth/ 2 - 75, windowHeight/2 + 90 )

button = createButton('enviar');
button.position(windowWidth/ 2 - 25, windowHeight/2 + 120 );
button.mousePressed(confirmar);
}

function confirmar(){
fill(0);
rect(0, windowHeight/2 + 120 ,2000, 100);

let x = Number(input.value());

if(x > number){
fill(255);
textSize(20)
text('el numero es mas chico', windowWidth/ 2 - 90, windowHeight/2 + 150 )
input.value('')
} 

if(x < number){
fill(255);
textSize(20)
text('el numero es mas grande', windowWidth/ 2 - 90, windowHeight/2 + 150 )
input.value('')
} 

if(x === number){
fill(255);
textSize(20)
text('¡¡¡¡Felicidades, adivinaste!!!!', windowWidth/ 2 - 120, windowHeight/2 + 150 )
input.value('')

rect(windowWidth/ 2 - 100, windowHeight/2 + 50 -200, 200, 200)

fill(0);
textSize(150);
text(number, windowWidth/ 2 - 60, windowHeight/2 + 30);
} 

}

