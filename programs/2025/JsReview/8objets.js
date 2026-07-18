const students = [
    { name: "Juan", grade: 85 },
    { name: "Maria", grade: 92 },
    { name: "Carlos", grade: 78 },
    { name: "Ana", grade: 5 },
    { name: "Pedro", grade: 8 }
];

const approved = students.filter(student => student.grade >= 60);

console.log(approved);