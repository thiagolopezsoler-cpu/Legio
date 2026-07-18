const A = [1,2,3,4,5,6,7,8,9]

const A1 = [1,2,3,4,5]
const A2 = [6,7,8,9]


function coincidealgunnumber(A1,A2){
for (let x = 0; x < A1.length; x++){
for (let y = 0; y < A2.length; y++){
if( A1[x] === A2[y]){
return true
}
}
}
return false
}
console.log(coincidealgunnumber(A1,A2))

function nohaynumberdemas(A1,A2,A){

}