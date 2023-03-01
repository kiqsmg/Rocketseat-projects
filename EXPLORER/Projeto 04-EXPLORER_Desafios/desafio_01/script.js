let numero01
let numero02

alert('Escolha dois números para podermos brincar de calcular...')
numero01 = Number(prompt('Digite seu primeiro número: '))
numero02 = Number(prompt('Digite seu segundo número: '))

let soma = numero01 + numero02  //soma
let sub = numero01 - numero02   //subtracao (1 menos 2)
let sub2 = numero02 - numero01  //subtracao (2 menos 1)
let mult = numero01 * numero02  //multiplicação
let div = numero01 / numero02   //divisão (1 dividido por 2)
let div2 = numero02 / numero01  //divisão (2 dividido por 1)
let rest = numero01 % numero02 //resto da divisão (1 dividido por 2)
let rest2 = numero02 % numero01 //resto da divisão (2 dividido por 1)



alert(`Seus resultados obtidos pelo programa...

        A soma entre ${(numero01)} e ${(numero02)} será igual a: ${(soma)}.
        Subtraindo ${(numero02)} do ${(numero01)} obtemos: ${(sub)}.
        Subtraindo ${(numero01)} do ${(numero02)} obtemos: ${(sub2)}.
        A multiplicação entre os números ${(numero01)} e ${(numero02)} será igual a: ${(mult)}.
        Dividindo ${(numero01)} por ${(numero02)} obtemos: ${(div)}.
        Dividindo ${(numero02)} por ${(numero01)} obtemos: ${(div2)}.
        O resto da divisão entre ${(numero01)} e ${(numero02)} é igual a: ${(rest)}.
        O resto da divisão entre ${(numero02)} e ${(numero01)} é igual a: ${(rest2)}.
`)


//Iremos verificar agora se a soma dos dois números é par ou ímpar...
if (soma % 2 == 0)  {
    alert('A soma dos números é par.')
} else {
    alert('A sma dos números é ímpar.')
}


//Iremos verificar se os dois números inseridos são iguais...
if ( numero01 == numero02) {
    alert('Os dois números inseridos são iguais.')
} else {
    alert('Os dois números inseridos são diferentes.')
}


//Alert final para indicar a finalização do programa rodando...
alert('----------FIM DO PROGRAMA----------')