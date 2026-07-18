const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
]


const machine = inventory.filter(inventory => inventory.type === "machine");
console.log(machine);


const valueMachine = machine.reduce((count, machine) =>{
return count + machine.value;
},0) 

console.log(valueMachine);