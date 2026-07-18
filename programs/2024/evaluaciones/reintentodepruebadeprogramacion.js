// let sprrana;
// let sprauto1;
// let ranaImg;
// let legio = true;
// let monedas = 0;
// let intentos = 1;
// let problemas = true;

// function preload() {
//     // Cargar imágenes antes de que el sketch inicie
//     ranaImg = loadImage('rana.png');
//     autoImg = loadImage('auto.png');
//     autoalrevesImg = loadImage('autoalreves.png');
// }
// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(0)

//     //creo rana y auto
//     sprrana = createSprite(windowWidth / 2, windowHeight - 50, 100, 100);
//     sprrana.addImage(ranaImg);
//     sprrana.scale = 0.2;

//     sprauto1 = createSprite(windowWidth + 50, windowHeight - 120, 100, 100);
//     sprauto1.addImage(autoImg);
//     sprauto1.scale = 0.5;
//     sprauto1.velocity.x = -3;

//     sprauto2 = createSprite(-50, windowHeight - 170, 100, 100);
//     sprauto2.addImage(autoalrevesImg);
//     sprauto2.scale = 0.5;
//     sprauto2.velocity.x = 4;


//     sprauto3 = createSprite(windowWidth + 50, windowHeight - 270, 100, 100);
//     sprauto3.addImage(autoImg);
//     sprauto3.scale = 0.5;
//     sprauto3.velocity.x = -5;

//     sprauto4 = createSprite(-50, windowHeight - 320, 100, 100);
//     sprauto4.addImage(autoalrevesImg);
//     sprauto4.scale = 0.5;
//     sprauto4.velocity.x = 6;

//     sprauto5 = createSprite(windowWidth + 50, windowHeight - 420, 100, 100);
//     sprauto5.addImage(autoImg);
//     sprauto5.scale = 0.5;
//     sprauto5.velocity.x = -7;

//     sprauto6 = createSprite(-50, windowHeight - 470, 100, 100);
//     sprauto6.addImage(autoalrevesImg);
//     sprauto6.scale = 0.5;
//     sprauto6.velocity.x = 8;


//     sprauto7 = createSprite(windowWidth + 50, windowHeight - 570, 100, 100);
//     sprauto7.addImage(autoImg);
//     sprauto7.scale = 0.5;
//     sprauto7.velocity.x = -9;

//     sprauto8 = createSprite(-50, windowHeight - 620, 100, 100);
//     sprauto8.addImage(autoalrevesImg);
//     sprauto8.scale = 0.5;
//     sprauto8.velocity.x = 10;
// }


// function draw() {
//     if(legio){
//     calles();
//     drawSprites();
//     movimiento();
//     keyPressed();
//     winter();
//     losser();
//     }
// }

// function calles() {

//     background(0);
//     fill(255)
//     textSize(60);
//     text('¿¿¿¿Sobreviviras????', 100, 100);

//     fill(255);
//     textSize(30);
//     text('monedas: ' + monedas, windowWidth -300, 70);

//     fill(255);
//     textSize(30);
//     text('Intentos: ' + intentos, windowWidth -300, 30);

//     //calle 1
//     fill(100);
//     rect(0, 100, windowWidth, 100);

//     drawingContext.setLineDash([15, 10]);
//     stroke(255);
//     strokeWeight(4);
//     line(0, 150, windowWidth, 150);

//     //calle 2
//     noStroke()
//     fill(100);
//     rect(0, 250, windowWidth, 100);

//     stroke(255);
//     strokeWeight(4);
//     line(0, 300, windowWidth, 300);

//     //calle 3
//     noStroke()
//     fill(100);
//     rect(0, 400, windowWidth, 100);

//     drawingContext.setLineDash([15, 10]);
//     stroke(255);
//     strokeWeight(4);
//     line(0, 450, windowWidth, 450);

//     //calle 4
//     noStroke()
//     fill(100);
//     rect(0, 550, windowWidth, 100);

//     stroke(255);
//     strokeWeight(4);
//     line(0, 600, windowWidth, 600);
// }



// function movimiento(){

//     //derecha
// if(sprauto1.position.x < 0){
//     sprauto1.position.x = windowWidth + 100;
// }
// if(sprauto3.position.x < 0){
//     sprauto3.position.x = windowWidth + 100;
// }

// if(sprauto5.position.x < 0){
//     sprauto5.position.x = windowWidth + 100;
// }

// if(sprauto7.position.x < 0){
//     sprauto7.position.x = windowWidth + 100;
// }
// //izquierda
// if(sprauto2.position.x > windowWidth){
//     sprauto2.position.x = -100;
// }
// if(sprauto4.position.x > windowWidth){
//     sprauto4.position.x = -100;
// }
// if(sprauto6.position.x > windowWidth){
//     sprauto6.position.x = -100;
// }
// if(sprauto8.position.x > windowWidth){
//     sprauto8.position.x = -100;
// }

// }

// function keyPressed() {

//     let canMoveUp = true;
//     let canMoveDown = true;
//     let canMoveLeft = true;
//     let canMoveRight = true;

//     if ((keyIsDown(87) || keyIsDown(UP_ARROW)) && canMoveUp) { // W o Flecha Arriba
//         sprrana.position.y -= 6;
//         canMoveUp = false;
//         setTimeout(() => canMoveUp = true, 100);
//     }

//     if ((keyIsDown(83) || keyIsDown(DOWN_ARROW)) && canMoveDown) { // S o Flecha Abajo
//         sprrana.position.y += 6;
//         canMoveDown = false;
//         setTimeout(() => canMoveDown = true, 100);
//     }

//     if ((keyIsDown(65) || keyIsDown(LEFT_ARROW)) && canMoveLeft && sprrana.position.x === 0) { // A o Flecha Izquierda
//         sprrana.position.x -= 6;
//         canMoveLeft = false;
//         setTimeout(() => canMoveLeft = true, 100);
//     }

//     if ((keyIsDown(68) || keyIsDown(RIGHT_ARROW)) && canMoveRight) { // D o Flecha Derecha
//         sprrana.position.x += 6;
//         canMoveRight = false;
//         setTimeout(() => canMoveRight = true, 100);
//     }
// }


// function winter(){
// if (sprrana.position.y < 50 && problemas && legio){
//     monedas += 5;

//     fill(0)
//     textSize(60);
//     text('!!!!FELICITACIONES, GANASTE', windowWidth / 2 - 430, windowHeight/2);
//     sprrana.position.y = 49;
//     button = createButton('¿Jugar devuelta?');
//     button.position( windowWidth / 2 -15, windowHeight/2 + 200);
//     button.mousePressed(reintentar);
//     problemas = false;
//     legio = false;
//     sprauto1.velocity.x -= 4 
//     sprauto2.velocity.x += 4 
//     sprauto3.velocity.x -= 4 
//     sprauto4.velocity.x += 4 
//     sprauto5.velocity.x -= 4 
//     sprauto6.velocity.x += 4 
//     sprauto7.velocity.x -= 4 
//     sprauto8.velocity.x += 4 
// }

// }

// function losser(){
// sprrana.collide(sprauto1, () =>{
//     fill(0);
//     textSize(60);
//     text('!!!!!You are losser¡¡¡¡¡', windowWidth / 2 - 230, windowHeight/2);
//     legio = false;
//     button = createButton('reintentar');
//     button.position( windowWidth / 2 -15, windowHeight/2 + 200);
//     button.mousePressed(reintentar);
// })
// sprrana.collide(sprauto2, () =>{
//     fill(0);
//     textSize(60);
//     text('!!!!!You are losser¡¡¡¡¡', windowWidth / 2 - 230, windowHeight/2);
//     legio = false;
//     button = createButton('reintentar');
//     button.position( windowWidth / 2 -15, windowHeight/2 + 200);
//     button.mousePressed(reintentar);
// })
// sprrana.collide(sprauto3, () =>{
//     fill(0);
//     textSize(60);
//     text('!!!!!You are losser¡¡¡¡¡', windowWidth / 2 - 230, windowHeight/2);
//     legio = false;
//     button = createButton('reintentar');
//     button.position( windowWidth / 2 -15, windowHeight/2 + 200);
//     button.mousePressed(reintentar);
// })
// sprrana.collide(sprauto4, () =>{
//     fill(0);
//     textSize(60);
//     text('!!!!!You are losser¡¡¡¡¡', windowWidth / 2 - 230, windowHeight/2);
//     legio = false;
//     button = createButton('reintentar');
//     button.position( windowWidth / 2 -15, windowHeight/2 + 200);
//     button.mousePressed(reintentar);
// })
// sprrana.collide(sprauto5, () =>{
//     fill(0);
//     textSize(60);
//     text('!!!!!You are losser¡¡¡¡¡', windowWidth / 2 - 230, windowHeight/2);
//     legio = false;
//     button = createButton('reintentar');
//     button.position( windowWidth / 2 -15, windowHeight/2 + 200);
//     button.mousePressed(reintentar);
// })
// sprrana.collide(sprauto6, () =>{
//     fill(0);
//     textSize(60);
//     text('!!!!!You are losser¡¡¡¡¡', windowWidth / 2 - 230, windowHeight/2);
//     legio = false;
//     button = createButton('reintentar');
//     button.position( windowWidth / 2 -15, windowHeight/2 + 200);
//     button.mousePressed(reintentar);
// })
// sprrana.collide(sprauto7, () =>{
//     fill(0);
//     textSize(60);
//     text('!!!!!You are losser¡¡¡¡¡', windowWidth / 2 - 230, windowHeight/2);
//     legio = false;
//     button = createButton('reintentar');
//     button.position( windowWidth / 2 -15, windowHeight/2 + 200);
//     button.mousePressed(reintentar);
// })
// sprrana.collide(sprauto8, () =>{
//     fill(0);
//     textSize(60);
//     text('!!!!!You are losser¡¡¡¡¡', windowWidth / 2 - 230, windowHeight/2);
//     legio = false;
//     button = createButton('reintentar');
//     button.position( windowWidth / 2 -15, windowHeight/2 + 200);
//     button.mousePressed(reintentar);
// })
// }



// function reintentar(){
//     legio = true;
//     problemas = true;
//     intentos += 1;
//     button.remove();
//     sprrana.position.y = windowHeight - 50;

// }
let velocidadExtra = 0;
let sprrana;
let ranaImg, autoImg, autoalrevesImg;
let autos = [];
let legio = true;
let monedas = 0;
let intentos = 1;
let problemas = true;
let button;

function preload() {
    ranaImg = loadImage('rana.png');
    autoImg = loadImage('auto.png');
    autoalrevesImg = loadImage('autoalreves.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    sprrana = createSprite(windowWidth / 2, windowHeight - 50, 100, 100);
    sprrana.addImage(ranaImg);
    sprrana.scale = 0.2;

    let calles = [
        { y: 120, dir: -3, img: autoImg },
        { y: 170, dir: 4, img: autoalrevesImg },
        { y: 270, dir: -5, img: autoImg },
        { y: 320, dir: 6, img: autoalrevesImg },
        { y: 420, dir: -7, img: autoImg },
        { y: 470, dir: 8, img: autoalrevesImg },
        { y: 570, dir: -9, img: autoImg },
        { y: 620, dir: 10, img: autoalrevesImg }
    ];

    calles.forEach(calle => {
        let x = calle.dir < 0 ? windowWidth + 50 : -50;
        let auto = createSprite(x, windowHeight - calle.y, 100, 100);
        auto.addImage(calle.img);
        auto.scale = 0.5;
        auto.velocity.x = calle.dir;
        autos.push(auto);
    });
}

function draw() {
    if (legio) {
        calles();
        drawSprites();
        moverAutos();
        controlar();
        checkWin();
        checkColision();
    }
}

function calles() {
    background(0);
    fill(255);
    textSize(60);
    text('¿¿¿¿Sobreviviras????', 100, 100);
    textSize(30);
    text('monedas: ' + monedas, windowWidth - 300, 70);
    text('Intentos: ' + intentos, windowWidth - 300, 30);

    for (let i = 0; i < 4; i++) {
        fill(100);
        noStroke();
        rect(0, 100 + i * 150, windowWidth, 100);
        stroke(255);
        strokeWeight(4);
        drawingContext.setLineDash([15, 10]);
        line(0, 150 + i * 150, windowWidth, 150 + i * 150);
    }
}

function moverAutos() {
    autos.forEach(auto => {
        if (auto.velocity.x < 0 && auto.position.x < -100) {
            auto.position.x = windowWidth + 100;
        }
        if (auto.velocity.x > 0 && auto.position.x > windowWidth + 100) {
            auto.position.x = -100;
        }
    });
}

function controlar() {
    if (keyIsDown(87) || keyIsDown(UP_ARROW)) sprrana.position.y -= 6;
    if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) sprrana.position.y += 6;
    if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) sprrana.position.x -= 6;
    if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) sprrana.position.x += 6;
}

function checkWin() {
    if (sprrana.position.y < 50 && problemas && legio) {
        monedas += 5;

        fill(0);
        textSize(60);
        text('!!!!FELICITACIONES, GANASTE', windowWidth / 2 - 430, windowHeight / 2);
        sprrana.position.y = 49;

        button = createButton('¿Jugar devuelta?');
        button.position(windowWidth / 2 - 15, windowHeight / 2 + 200);
        button.mousePressed(reintentar);

        problemas = false;
        legio = false;

        // Aumentar dificultad
        velocidadExtra += 2;

        sprauto1.velocity.x = -3 - velocidadExtra;
        sprauto2.velocity.x = 4 + velocidadExtra;
        sprauto3.velocity.x = -5 - velocidadExtra;
        sprauto4.velocity.x = 6 + velocidadExtra;
        sprauto5.velocity.x = -7 - velocidadExtra;
        sprauto6.velocity.x = 8 + velocidadExtra;
        sprauto7.velocity.x = -9 - velocidadExtra;
        sprauto8.velocity.x = 10 + velocidadExtra;
    }

}


function checkColision() {
    autos.forEach(auto => {
        sprrana.collide(auto, () => {
            if (legio) {
                fill(0);
                textSize(60);
                text('!!!!!You are losser¡¡¡¡¡', windowWidth / 2 - 230, windowHeight / 2);
                legio = false;
                button = createButton('reintentar');
                button.position(windowWidth / 2 - 15, windowHeight / 2 + 200);
                button.mousePressed(reintentar);
            }
        });
    });
}

function reintentar() {
    legio = true;
    problemas = true;
    intentos += 1;
    button.remove();
    sprrana.position.y = windowHeight - 50;
    autos.forEach(auto => auto.velocity.x /= 1.5);
}
