
//function expression
//function anonymous

//parameters
const sum = function(number1, number2){
    console.log(number1 + number2)
    
}


sum(2,3) //Arguments


/*
    const sum = function(number1, number2){
    total = number1 + number2  //esse total pode ser chamado fora de escopo, já se ele fosse uma variavel não poderia
    return total  //se eu não colocar esse return, o total de cima não vai aparecer como a soma do number1 + number2
    }
    */



//maneira mais correta de trabalhar com esse exemplo

/*
let total = 0

const sum = function(number1, number2){
    let total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25

console.log(`A soma é ${sum(number1, number2)}`)    //isso vai dar 59
console.log(total) //isso vai dar zero

*/



//explicando de maneira ludica
//função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maça')

console.log(copo)