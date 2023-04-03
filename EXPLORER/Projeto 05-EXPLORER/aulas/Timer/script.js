//DOM Document Object Model  (document is a object reference in JS for something in html)
                     
//document.querySelector() # is used for IdleDeadline, and . is used for
//if i use .classList I will axcess the class of the object


const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')

const buttonSoundOn = document.querySelector('.sound_on')
const buttonSoundOff = document.querySelector('.sound_off')


let minutes
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

//programação imperativa "pegue o elemento, adicione o elemento,..."

    //DOM is event driven
    //Call Back, 
    //Programação imperativa


function countdown() {
    //SetTimeout will execute a function after a time o ms
    setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)

        if( seconds <= 0 ) {
            seconds = 60
        }
        secondsDisplay.textContent = seconds -1

        countdown() //Recurção (uma função chamando ela mesma)
    }, 1000) 
}


buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')

    countdown()
})

buttonPause.addEventListener('click', function() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
} )

buttonStop.addEventListener('click', function() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
})

buttonSet.addEventListener('click', function() {
    minutes = prompt('Quantos minutos?')
    minutesDisplay.textContent = minutes

})