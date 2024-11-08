const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
]



const maquinas = inventory.filter(inventory => inventory.type === "machine");

const value = maquinas.reduce((contador, maquinas) => {
return contador + maquinas.value;



},0)
console.log(value)
