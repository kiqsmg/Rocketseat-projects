import {
    minutesDisplay,
} from "./elements.js"


export default function controls({
    buttonPlay,
    buttonPause,
}) {

    let newMinutes = 0

    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
    }

    function pause() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }

    function reset() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }


    function plus() {
        let newNumber = (Number(minutesDisplay.textContent) + 5)
        newMinutes = newNumber
        return newMinutes
    }

    function minus() {
        let newMinutes = (Number(minutesDisplay.textContent) - 5)

        return newMinutes
    }

    return {
        play, pause, reset, plus, minus
    }
}