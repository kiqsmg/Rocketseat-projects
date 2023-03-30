const screen1 = document.querySelector(".screen1")  //there is a dot before cause its a class
const screen2 = document.querySelector(".screen2")
const biscoito_da_sorte = document.querySelector("#biscoito_da_sorte") //there is a # before cause its a id
const novo_biscoito_da_sorte = document.querySelector("#try_again")



const phrase = [
    "Mais vale um na mão que dois no sutiã",
    "Facil vem, muito dado",
    "Pouco dado, dificil vem",
    "Quem é amigo, amigo é",
    "O juizo morreu de velhice",
]



biscoito_da_sorte.addEventListener('click', handleTryClick)
novo_biscoito_da_sorte.addEventListener('click', handleResetClick)

document.addEventListener('keydown', function(e) {
    if (e.key == 'Enter' && screen2.classList.contains('hide')){
        handleResetClick()
    } else if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
        }
    }
)

function handleTryClick(event) {
    toggleScreen()
    pickPhrase()

}

function handleResetClick() {
    toggleScreen()
}

function pickPhrase() {
    let allPhrases = phrase.length
    let randomNumber = Math.floor(Math.random() * allPhrases)
    screen2.querySelector("p").innerText = `${phrase[randomNumber]}`
}

function toggleScreen() {
    screen2.classList.toggle("hide")
    screen1.classList.toggle("hide")
}