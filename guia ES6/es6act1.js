const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
    ]


const machine = inventory.filter(item => {
    return item.type === 'machine';
})

console.log(machine);