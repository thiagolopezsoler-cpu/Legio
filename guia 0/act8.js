// esta constando hajdsfhak pero pudiendo con ayuda quiza un poco en exceso pero deberia repetir esto, me gustaria hacer otro q este constantamente calculando los multiplicadores tipo con un while o algo asi


function setup(){
createCanvas(windowWidth, windowHeight);
background(0);


fill(255);
textSize(80);
text('Decime el numero',windowWidth / 2 - 400, windowHeight / 2 - 200);


input = createInput();
input.position(windowWidth / 2 - 50, windowHeight / 2 - 100);

button = createButton('Quiero sus multiplos');
button.position(100, 100);
button.mousePressed(verifico);

}

function verifico(){

    let z = parseInt(input.value()); // Convierte el valor a número
    
    let rows = 5;
    let cols = 2;
    let cellWidth = 150;
    let cellHeight = 50;

    let startX = (width - cols * cellWidth) / 2;
    let startY = (height - rows * cellHeight) / 2;

    background(0); // Redibuja el fondo para limpiar el canvas
    fill(255);
    textSize(80);
    text('Decime el numero', windowWidth / 2 - 400, windowHeight / 2 - 200);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
        let x = startX + j * cellWidth;
        let y = startY + i * cellHeight;
        
        stroke(255);
        noFill();
        rect(x, y +150, cellWidth, cellHeight);

        // Calcula el múltiplo correspondiente y lo muestra
        let multiple = z * (i * cols + j + 1);
        fill(255);
        textSize(20);
        text(multiple, x + cellWidth / 2 - 15, y + cellHeight / 2 + 150);
}
}
}
    















