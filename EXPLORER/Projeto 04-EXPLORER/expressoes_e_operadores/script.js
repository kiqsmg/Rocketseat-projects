/* Expressões e Operadores

-Expressions   --> qualquer linha de código que resolve alguma coisa no js
-Operators
    Binary  apenas um elemento
    Unary   uma junção de dois elementos
    Ternary   uma junção de tres elementos    console.log(false ? 'alo' : 'nada')
*/

/* NEW
    *left-hand-side expression
    *criar um novo objeto
*/
let name = new String('Caique')
name.surName = "Gomes"
let age = new Number(21)
console.log(name.surName, age)










// typeof e delete
//console.log(typeof "Caique")

const person = {
    name: 'Caique',  //atento no uso de virgulas
    age: 21,
}
delete person.age
//console.log(person) vai entregar apenas o name










//Operadores Aritmétiicos

console.log(3*5)  //multiplicação

console.log(3/5)   //divisão

console.log(3+5) //soma

console.log(3-5)    //subtração

let remainder //resto da vidisão
remainder = 11%10  //vai sobrar 1
console.log(remainder)

let increment = 0//incremento
increment++   //vai adicionando 1
console.log(increment)  /*lembrando que ele só adiciona 1 depois que foi feito,
por isso se colocar ele dentro do console.log ele não vai er adicionado o 1 ainda*/

let decrement = 0 //decremento
decrement--
console.log(decrement) //vai dar -1

console.log(3**5) //3 elevado a 5










// Grouping operator ( )
//respeita as regras básicas da sequência de operações da matemática










//Operadores de comparação  ==> comparar valores e retornar um Boolean
let one = 1 //one recebe o valor 1
let two = 2 // two recebe o valor 2

console.log( two == 1) //vai entregar false
console.log( one == "1") //vai entregar verdadeiro

//console.log(one != two) //sim, ele é diferente, logo entrega true
//console.log(one != 1)   //não, ele é igual, logo entrega false
//console.log(one != "1")    //não, ele é igual, logo entrega false











//estritamente igual a
console.log ( one === "1") //vai entregar false, pois não é String
console.log( one === 1)   //vai entregar true, pois é Number

//estritamente diferente
console.log( two !== "2")  //vai entregar true, pois realmente é diferente quanto a tipo (typeof)
console.log( two !== 2)     // vai entregar false, pois é igual











//operadores de comparção maior e menor
console.log (one < two)
console.log( one <= two)
console.log(one <= 1)
console.log(one <= 0)










//Operadores de atribuição (Assignment)
// x= x+2
x += 2

// x = x-1
x -= 1

// x = x*2
x *= 2

//x = x/2
x /= 2

//remainder, exponentiation

x %= 2

x **= 2











// Operadores Lógicos (logical operators)

let pao = true
let quejo = false

//AND && (precisa ter as duas coisas pra ser TRUE)
console.log(pao && queijo)

// OR || (basta ter um deles para ser TRUE)
console.log(pao || queijo)

// NOT ! (caso não tenha um deles vai ser TRUE)
console.log(!pao) //ele nega, logo troca o valor da variavel de TRUE pra FALSE ou de FALSE para TRUE











//Operador Condicional (Ternário)
// condition ? value1 : value2

let suco = true
let misto = true

const niceBreakfast = suco && misto ? 'Café top!' : 'Café ruim';

console.log(niceBreakfast)  //ele vai dizer se o café tá bom ou ruim dependendo dos valores das variaveis


//maior de 18?

let idade = 21

const canDrive = idade >= 18 ? 'Pode dirigir' : 'Não pode dirigir';
console.log(canDrive)










//Operador de String (String operator)
let alpha = 'alpha'
console.log(alpha + 'bet')











//Type conversion (typecasting)   vs  Type coersion (js does the conversion)

/*
    FALSY
    Quando um valor é considerado false em contextos onde
    um booleano é obrigatorio (condicionais e loops)
    
    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

//caso que a função requer um booleano
console.log( /* valor vai aqui*/ ? 'verdaeiro' : 'falso')

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um
    booleano é obrigatório (condicionais e loops)
    
    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( /* valor vai aqui*/ ? 'verdaeiro' : 'falso')











/*
    Operator precedence

    *Grouping                          ()
    *Negação e incremento               ! ++ --
    *multiplicação e divisão             * /
    *adição e subtração                 + -
    *relacional                         <  <=  >  >=
    *igualdade                       ==    !=  ===  !== 
    *AND                          &&
    *OR                           ||
    *condicional                  ? :
    *assignment                   = += -=

*/
