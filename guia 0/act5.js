// casi ni costo(tiempo estimado 3 minutos)

let contador = 0;


for(let x = 0; x < 100; x++){
    contador = contador + x;
        if(contador < 1000){
        console.log('valor del numero ' + x, ', suma total ' + contador);
        if(contador > 1000){
        break;
    }
        
    }
}