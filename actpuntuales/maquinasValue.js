/*yo quiero filtar todos elementos q sean las maquinas y posteriormente quiero sumar sus valor con un reduce*/ 


const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
]


const maquinas = inventory.filter(maquina => maquina.type === "machine")
console.log(maquinas)


const valueOfMaquines = maquinas.reduce((count, value) =>  count + value.value,0,);
console.log(valueOfMaquines)