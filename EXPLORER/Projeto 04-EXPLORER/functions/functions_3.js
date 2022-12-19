//function scapo

let subject   //crie a variavel let subject

function createThink(subject) {
    return subject
}

console.log(createThink(subject)) //quando voce cria uma variavel mas nao atribui um valor ela vira undefined




/* exemplo no qual não a ninguem sobreescrevendo ninguem

let subject= 'create video'   //crie a variavel let subject

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(createThink(subject))   ===> esse vai devolver 'study'
console.log(subject)   ===> esse vai devolver 'create video'

*/







/* exemplo no qual alguem esta sobreescrevendo alguem

let subject= 'create video'   //crie a variavel let subject

function createThink() {            //aqui não tem parametro, logo o study sunescreve o subject anterior
    subject = 'study'
    return subject
}

console.log(createThink(subject))   ===> esse vai devolver 'study'
console.log(subject)   ===> esse vai devolver 'study'

*/




//function hoisting

sayMyName()

function sayMyName() {
    console.log('Mayk')
} //nesse caso ele vai devolver 'Mayk' pois a function esta vazia    -----aqui não sofre o hoisting(elevação)-----


sayMyName()

const sayMyName = function() {
    console.log('Mayk')
} //nesse caso ele não vai sofrer o hosting(elevação)




//arrow function

const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Mayk')


//callback function


//exemplo 1 de como seria o passo a passo que o programa vai executar
function sayMyName() {
    console.log('antes de executar a funcao callback')

    function name() {
        console.log('estou em uma callback')
    }
    name()
    console.log('depois de executar a callback')
}

sayMyName()  


//exemplo 2 de como a gente vai escrever
function sayMyName(name) {
    console.log('antes de executar a funcao callback')

    name()

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)  





//function() constructor
//*expressão new
//*criar um novo objeto
//*this keyword

function Person(name) {
    this.name = name    //this é referente ao mayk que esta la fora
}
const Mayk = new Person("Mayk")  //função construtora que vai voltar um objeto pra function Person acima
const Joao = new Person("João")

console.log(Mayk)
console.log(Joao)




//segundo exemplo de function() constructor

function Person(name) {
    this.name = name    //this é referente ao mayk que esta la fora
    this.walk = function() {
        return "andando"
    }
}
const Mayk = new Person("Mayk")  //função construtora que vai voltar um objeto pra function Person acima
const Joao = new Person("João")

console.log(mayk.walk())
console.log(joao.walk())   //vao devolver "andando"



//terceiro exemplo de function() constructor

function Person(name) {
    this.name = name    //this é referente ao mayk que esta la fora
    this.walk = function() {
        return this.name + " está andando"
    }
}
const mayk = new Person("Mayk")  //função construtora que vai voltar um objeto pra function Person acima
const joao = new Person("João")

console.log(mayk.walk())
console.log(joao.walk())   //vao devolver "-name- está andando"


//existem varios function()  constructor já prontos

//ex01
let name = new String("Caique")
console.log(name)

//ex02
let date = new Date("2022-12-08")
console.log(date)

//ex03
let number = new Number(345)
console.log(number)