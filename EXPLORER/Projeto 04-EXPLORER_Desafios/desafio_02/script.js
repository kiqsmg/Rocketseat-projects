
alert("O professor Gabriel corrigiu suas provas...")

const students = [
    {
        name: "Caique",
        age: 21,
        gradeFirstTest: 58,
        gradeSecondTest: 55,
    },
    {
        name: "Rebecca",
        age: 20,
        gradeFirstTest: 82,
        gradeSecondTest: 45,
    },
    {
        name: "Ramon",
        age: 23,
        gradeFirstTest: 47,
        gradeSecondTest: 92,
    },
    {
        name: "João",
        age: 27,
        gradeFirstTest: 92,
        gradeSecondTest: 89,
    },
    {
        name: "Miguel",
        age: 21,
        gradeFirstTest: 75,
        gradeSecondTest: 60,
    },
    {
        name: "Vitória",
        age: 20,
        gradeFirstTest: 92,
        gradeSecondTest: 75,
    }
]

function StudentsGrade (student) {
    alert(`
    O aluno ${student.name} obteve a média: ${(student.gradeFirstTest + student.gradeSecondTest)/2 }.
    `)


    if (((student.gradeFirstTest + student.gradeSecondTest)/2) < 70) {
        alert(`O aluno reprovou.`)
    } else {
        alert(`O aluno foi aprovado.`)
    }
}

for (let student of students) {
    StudentsGrade(student)
}
