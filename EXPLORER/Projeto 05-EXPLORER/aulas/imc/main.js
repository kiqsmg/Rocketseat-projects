

//Variables

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//const modalWrapper = document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector('.modal .title span')
//const modalBtnClose = document.querySelector('.modal button.close')

//We create a constant to later call it to open and close the page 'Modal'
const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    btnClose: document.querySelector('.modal button.close'),

    open: function() {
        Modal.wrapper.classList.add('open')},
    close: function() {
        Modal.wrapper.classList.remove('open')}
}



//When form is submited, it will do a function   (ways to atribute a function to a event)
//Ex.01-->    form.onsubmit = fiunction() {}
//Ex.02-->    form.onsubmit = () => {}
//Ex.03-->    form.onsubmit = handleSubmit
    //handleSubmit = ...

form.onsubmit = function(event) {
    event.preventDefault()                 //we use this in the function so the event onsubmit is done it will not reload the page
    const weight = inputWeight.value 
    const height = inputHeight.value 

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`
    
    Modal.message.innerText = message
    
    // modalWrapper.classList.add('open')
    Modal.open()
}

Modal.btnClose.onclick = () => {
    // modalWrapper.classList.remove('open')
    Modal.close()
}

function IMC(weight, height) {
    return (weight / ((height / 100)** 2)).toFixed(2)
}