// costo hacer todo lo relacinado con el canvas 
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    fill(255);
    textSize(100);
    textAlign(CENTER, CENTER)
    text ('ingresa un numero mayor a 100', windowWidth/2, windowHeight/4);
    

    input = createInput();
    input.position(windowWidth/2 - 80, windowHeight/4 + 200);

    button = createButton('Enviar');
    button.position(windowWidth/2 - 20, windowHeight/4 + 250);
    button.mousePressed(verificarnumber);
}

function verificarnumber(){
    fill(0);
    rect( 0, windowHeight/4 + 50, 10000, 100);

if (input.value() > 100){
    fill(255);
    textSize(40);
    textAlign(CENTER, CENTER)
    text('¡¡¡¡El numero es correcto (' + input.value() + ') !!!! ', windowWidth/2 - 10, windowHeight/4 + 100)
} else{
    fill(255);
    textSize(40);
    textAlign(CENTER, CENTER)
    text('ingresa otro numero por favor', windowWidth/2 - 10, windowHeight/4 + 100)
}
input.value('')
}