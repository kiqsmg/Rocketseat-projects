


// usar let "let it change" ao longo do codigo
let result = prompt('Adivinhe o número que estou pensando...')

const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1;

while(Number(result) != randomNumber) {
    result = prompt('Erro tente novamente')
    xAttempts++
}

alert(`Parabens! O numero que eu pensei foi o ${randomNumber}, e voce adivinhou o numero
em ${xAttempts} tentativas.`)