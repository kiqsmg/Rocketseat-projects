// switch


let expression = 'b'

switch (expression) {
    case 'a':
        //codigo
        console.log('a')
        break
    case 'b':
        //codigo para expressão b
        console.log('b')
        break
    default:
        console.log('default')
        break 
}













// Throw

function sayMyName(name = '') {
    if (name === '') {
        throw new Error("Nome é obrigatório.")
    }

    console.log('depois do erro') //não roda, todo throw interrompe linha de codigo até chegar no catch
}

//  Try...catch

try {              //exexcuta a tentativa de rodar a função
    sayMyName('')
} catch(e) {       //pega o resultado da função e com o console.log printa o resultado
    console.log(e)

}










//Estrutura de repetição FOR


//conta de 0 até 10
for(let i = 0; i < 10; i++) {   //primeiro a variavel, depois a condição de continuação, e por ultimo o que ele vai fazer enquanto roda
    console.log(i)
}

//conta regressiva de 100 até 0
for( let x = 100; x > 0; x--) {
    console.log(x)
}


// break - para a execução do loop
// continue - pula a execução do momento









// WHILE

let y = 0
while(i < 10) {
    console.log(y)

    i++;   //isso serve para atualizar o valor de y enquanto roda o código

}









// FOR OF

let name = 'Caique'
let names = ['Joao', 'Paulo', 'Marcos', 'Pricila']

for(let character of name) {   //vai ir pegando letra por letra no nome caique
    console.log(character)
}

for(let name of names) {     //vai ir atribindo a sequencia de nomes um de cada vez ao 'name'
    console.log(name)
}










// for... in

let person = {
    name: 'John',
    age: 30,
    weight: 88.6

}

for(let property in person) {   //criando loop para pegar cada propriedade que a person tem
    console.log(property)
    console.log(person.name)    //acessando uma propriedade especifica
}

