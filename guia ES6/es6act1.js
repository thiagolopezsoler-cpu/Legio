//la idea aca seria filtrar los tipos de gastos que sean maquinas(filter)
// y despues usar un reduce para sacar el valor total

const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
]


const machine = inventory.filter(inventory => inventory.type === "machine")
console.log(machine);


const machineValue = machine.reduce((count,  value) => {
return count += value.value;
},0)
console.log(machineValue);














































/*const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
]
const machine = inventory.filter(inventory => inventory.type === "machine")
console.log(machine)

const machineValue = machine.reduce ((count, machine) =>{
    return count + machine.value;
},
0);
console.log("the value of de machine is " + machineValue);
/*
const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
]




const machine = inventory.filter(inventory => inventory.type === "machine");
console.log(machine);



const value = machine.reduce((count, machine) => {
    return  count + machine.value;

}, 0);

console.log(value)
*/