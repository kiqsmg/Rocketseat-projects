
//Import
import {Modal} from './modal.js'
import {AlertError} from './alert-error.js'
import {calculateIMC, notANumber} from "./utils.js"


//Variables

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()


//const modalWrapper = document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector('.modal .title span')
//const modalBtnClose = document.querySelector('.modal button.close')

//We create a constant to later call it to open and close the page 'Modal'



//When form is submited, it will do a function   (ways to atribute a function to a event)
//Ex.01-->    form.onsubmit = fiunction() {}
//Ex.02-->    form.onsubmit = () => {}
//Ex.03-->    form.onsubmit = handleSubmit
    //handleSubmit = ...


form.onsubmit = function(event) {
    event.preventDefault()                 //we use this in the function so the event onsubmit is done it will not reload the page
    const weight = inputWeight.value 
    const height = inputHeight.value 


    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)
    if(weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
    
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`
    
    Modal.message.innerText = message
    
    // modalWrapper.classList.add('open')
    Modal.open()
}