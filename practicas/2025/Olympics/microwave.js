// let n = 100000
let a = 1000000000
let f = 1000000000
let p = 1000000000

function thor(a, f, p, D){
    let count = 0
    for( x = 0 ; x < a ;x ++){
        for(i = 0; i < f ; i++){
            for(k = 0; k < p; k++){
                if((a * f) / p < D)
                    count++
            }
        }
    }
}