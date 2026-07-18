const inventory = [
    { type: "machine", value: 5000 },
    { type: "machine", value: 650 },
    { type: "duck", value: 10 },
    { type: "furniture", value: 1200 },
    { type: "machine", value: 77 }
]

const machines = inventory.filter(think => think.type === "machine");
console.log(machines)

const valuesMachine = machines.reduce((value, machine) => {
    value += machine.value
    return value;
}, 0);

console.log(valuesMachine)