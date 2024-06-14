let sprrana;
let sprauto1;
let sprauto2;
let sprauto3;
let sprauto4;
let sprauto5;
let sprauto6;
let sprcarril1;
let sprcarril2;
let sprcarril3;
let sprcarril4;
let size = 50;
let vidas = 10;

function setup (){

//creo el canvas
createcanvas(800,600);
 background (0);

// creo los sprites
create.sprrana (50,300,size);
create.sprauto1 (200,50, size,size);
create.sprauto3 (200,100, size,size);
create.sprauto4 (200,150 ,size,size);
create.sprauto2 (400,50, size, size);
create.sprauto5 (200 ,100 , size,size);
create.sprauto6 (200 ,150 , size,size);
create.sprcarril1 (100,0,20,1000);
sprcarril1.color (0)
create.sprcarril2 (250,0,20,1000);
sprcarril2.color (0)
create.sprcarril3 (300,0,20,1000);
sprcarril3.color (0)
create.sprcarril4 (400,0,20,1000);
sprcarril4.color (0)

}
function draw (){



// movimientos de la rana
    if (keyPressed (up_arrow)){
sprrana.position.y += 5
    }
    if (keyPressed (letf_arrow)){
        sprrana.position.y -= 5
        }

if (keyPressed (down_arrow)){
    sprrana.position.x -= 5
    }

    if (keyPressed (right_arrow)){
        sprrana.position.x += 5
        }

    

  // movimientos del auto 1
  sprauto1.position.x += 10

  if (sprauto1.position.x = 800){
    sprauto1.position.x = 0
  }
  // movimiento del auto 2
  sprauto2.position.x -= 10

  if (sprauto2.position.x = 800){
    sprauto2.position.x = 0
  }
         // movimientos del auto 3
  sprauto3.position.x += 10

  if (sprauto3.position.x = 800){
    sprauto3.position.x = 0
  }
  // movimiento del auto 4
  sprauto4.position.x -= 10

  if (sprauto4.position.x = 800){
    sprauto4.position.x = 0
  }   

  // movimientos del auto 5
  sprauto5.position.x += 10

  if (sprauto5.position.x = 800){
    sprauto5.position.x = 0
  }
  // movimiento del auto 6
  sprauto6.position.x -= 10

  if (sprauto6.position.x = 800){
    sprauto6.position.x = 0
  }


  // colosion = respawn de la rana
    if (sprauto1.overlad(sprrana)){
    sprrana.position.y = 50
    vidas -=1
    }
  // q pasa cuando ganas
  if (sprrana.position.y = 800){
  text (400,400)
  text = 'ganaste, bien ahi'

  // cuando perdemos
  if (vidas = 0){
    sprrana = 10000
    }
        

  // cargo los sprites
  }
  drawsprites;
  }

 
 
