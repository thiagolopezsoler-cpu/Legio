let myimagen; // Variable para la imagen

function preload() {
    // Cargar la imagen desde la URL
    myimagen = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQxhr6PZHIER40y0zc7lw-p1dvtGj4k2sUeA&s');
}

function setup() {
    createCanvas(myimagen.width, myimagen.height); // Ajusta el tamaño del canvas al de la imagen
    myimagen.loadPixels(); // Carga los píxeles de la imagen

    // Dibuja la imagen en el canvas
    image(myimagen, 0, 0);

    // Aplica el filtro de blanco y negro
    loadPixels(); // Carga los píxeles del canvas

    for (let i = 0; i < pixels.length; i += 4) {
        // Obtener los valores de rojo, verde y azul
        let r = pixels[i];     // Rojo
        let g = pixels[i + 1]; // Verde
        let b = pixels[i + 2]; // Azul
        
        // Calcular el brillo como promedio
        let brightness = (r + g + b) / 3;

        // Establecer el nuevo valor de los píxeles en escala de grises
        pixels[i] = brightness;     // Rojo
        pixels[i + 1] = brightness; // Verde
        pixels[i + 2] = brightness; // Azul
        // El canal alfa (transparencia) se deja igual
    }

    updatePixels(); // Actualiza los píxeles del canvas
}

function draw() {
    // No es necesario animar nada aquí
}