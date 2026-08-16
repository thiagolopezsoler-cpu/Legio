// me trajo traumas sagfsahg, tengo miedo de hacer este trabajo(creo q lo voy a procrastinar un poco obviamente adelantando otra materia)

let myimagen; // Define la variable para la imagen

function preload() {
    // Carga la imagen desde la URL
    myimagen = loadImage('https://cdn-p.smehost.net/sites/a8928da38df6414aae98564041b07ae0/wp-content/uploads/2024/07/NICKI-2-e1719940269617-1920x964.jpg');
}

function setup() {
    createCanvas(myimagen.width, myimagen.height); // Ajusta el tamaño del canvas al tamaño de la imagen
    background(0);

    if (myimagen) {
        image(myimagen, 0, 0); // Muestra la imagen en su tamaño original
        filter(GREY); // Aplica el filtro de blanco y negro
    } else {
        console.error("La imagen no se pudo cargar.");
    }
}

function draw() {
    // Si quieres animar algo o dibujar en cada frame, puedes hacerlo aquí
}