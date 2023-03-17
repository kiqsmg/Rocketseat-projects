// Variaveis
const screen01 = document.querySelector(".screen01")
const screen02 = document.querySelector(".screen02")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random()*10)       //tem que deixar como let e não const pois iremos reatribuir um novo valor pra variavel
let xAttempts = 1 //numero de tentativas

// Eventos
btnTry.addEventListener('click', handleTryClick) //handleclick é um argumento da função, que é uma função
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', function(event){              //Aqui esse evento está GLOBAL
    if (event.key == "Enter" && screen01.classList.contains('hide')) {     //Duas condições para se adaptar as duas telas possiveis dessa pagina
        handleResetClick()
    } 
})

// Funções
function handleTryClick(event) {            //handleTryClick vai receber os dads do event, que no caso é o click
    // Função Callback
    event.preventDefault() //Vai fazer com que ele não atualize a pagina (que seria o padrao do evento)

    const inputNumber = document.querySelector("#inputNumber") //vai pegar o valor da caixa de input

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        document.querySelector(".screen02 h2").innerText = `acertou em ${xAttempts} tentativas.`
    }

    inputNumber.value = ""
    xAttempts++ //toda vez que o handleclick é apertado ele aumenta em +1 o valor de Attempts
}

function handleResetClick( ){
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random()*10)
}

function toggleScreen() {
    screen01.classList.toggle("hide")
    screen02.classList.toggle("hide")
}