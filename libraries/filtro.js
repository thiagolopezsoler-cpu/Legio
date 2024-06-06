let img;

function preload() { 
  img = loadImage('nic-truenow.jpg');
}

function setup() {
  createCanvas(2000, 3000);
    background(0);
    image(img, 0, 0);
}

function draw(){
    color = image.getpixel((x, y))



}