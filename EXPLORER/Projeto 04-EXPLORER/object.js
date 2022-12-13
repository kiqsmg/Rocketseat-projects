//Object

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(person.name) //puxa o name do object person
console.log(person.weight) // puxa o weight do object person




//Array

const animals= [
    'Lion', //posição 0
    'Monkey', //posição 1
    {
        name: 'Cat' ,//posição 2
        age: 3
    }
]

//acessar valores dentro do array     ----array funciona com posição----
console.log(animals[0])  //ele vai puxar o Lion pois é a posição 0 do Array

console.log(animals[2].name) //vai puxar a o nome




/*
    let student= {
        name: "Caique",
        age: 21,
        weight: 84.8,
        isSubscribed: true.
    };

    console.log(typeof student)     ...vai entregar Object

    console log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)
*/


/*Declare uma variavel do tipo array, de nome students, e deixe vazio (atribua nenhum valor
    let students= []

    students = [
        student     //aqui estamos atribuindo o student lá de cima pra essa array
    ]
    console.log(students)
*/

/*Agora pra pegar o primeiro student (posição 0) do array students:
    console.log(students[0])

*/


/*Crie um novo aluno pra posição 1 do Array students

    const john = {
        name: "John",
        age: 23,
        weight: 74.5,
        isSubscribed: true,
    }

    students = [
        student,
        john
    ]
    OU
    students[1] = john

    console.log(students) // aqui vai puxar todos os students Caique e john
    
*/