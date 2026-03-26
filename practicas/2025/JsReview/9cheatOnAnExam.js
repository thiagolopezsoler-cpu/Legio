const students = [
    { name: "Juan", grade: 85 },
    { name: "Maria", grade: 92 },
    { name: "Carlos", grade: 78 },
    { name: "Ana", grade: 5 },
    { name: "Pedro", grade: 8 }
];

const makeACheatSheet = students.map(student => {
    return { 
        ...student,
        grade: student.grade < 60 ? 60 : student.grade,
        // nombre_perro: "juan"
    };
});
console.log(makeACheatSheet);
