/*
Prototype

*prototype-based language
*prototype chain
*__proto__

*/

console.log('9' + 5) //contatenar um string junto com um number ele vira uma string

console.log(Number('9') + 5) //aqui ele somadois number pois tu já converteu a string para number

let string = "123"
console.log(Number(string)) //transformando uma string em number

let number = 321
console.log(String(number)) //transformando number em string





/////////////////////////////////////////////////////


// Contar quantos caracteres tem uma palavra e quantos digitos tem um numero

let word = "Paralelepipedo"
console.log(word.length)

let number1 = 1234
console.log(String(number1).length)


//Transformando um número quebrado com 2 casas decimais e trocar o ponto por virgula

let number2 = 345.33452345
console.log(number2.toFixed(2).replace(".",","))    //toFFixed vai deixar o número apresentando apenas duas casas decimais de pois da virgula e vai transformar em string
//   já o replace trocou todos os pontos por virgulas
//adendo que não tem como numero ter virgula, ai ele vira um NOT A NUMBER (SERÁ QUE DA DE TRANSFORMAR DE VOLTA EM NUMBER OU TEM QUE PRIMEIRO TROCAR POR PONTO?)



///////////////////////////////////////////////////

//Transformar letras mnusculas em maisculas 

let word1 = "Programar é muito bacana!"
console.log(word1.toUpperCase())


/////////////////////////////////////////////////

//Separar um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque

let phrase = "Eu quero viver o Amor"
let myArray = phrase.split(" ")  //split vai receber como argumento o parametro que eu quero usar para criar as separações, tipo espaços entre palavras

let phraseWithUnderscore = myArray.join("_") //parametro dentro do join vai ser o utilizando entre os array durante o join para converter de volta em string
console.log(phraseWithUnderscore)



////////////////////////////////////////////////

//Verifique se o texto contém a palavra amor

let phrase1 = "Eu quero viver o Amor!"
console.log(phrase1.includes("amor"))    //inclde é case-sensitive, ele diferencia upper case from lower-case, então tem que ser especifico



///////////////////////////////////////////////

//criar um array 
let myArray1 = ['a', 'b', 'c']

//criar um array com construtor

let myArray2 = new Array('a', 'b', 'c')    // a b e c são elementos dentro do array




/////////////////////////////////////////////

//Contar elementos de um array
console.log(["a", {type: "array"}, function() {return "alo"}])


// se eu colocar o .lentgh após o colchete ele vai me dizer quantos elementos tem no Array

//se eu colocar um [1] após o colchete, ele vai puxar pra mim o elemento de número 2 dentro do Array

//para retornar/run a função basta colocar um [x] referente ao número da posição da função, e depois um ()


////////////////////////////////////////////

//Transformar uma cadeia de caracteres em elementos de um array

let word3 = "manipulação"
console.log(Array.from(word3))  //cria uma array na qual cada letra da string virá um elemento dentro desse Array