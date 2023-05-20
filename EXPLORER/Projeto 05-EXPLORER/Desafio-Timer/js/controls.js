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
        newMinutes = newMinutes++

        return newMinutes
    }

    function minus() {
        newMinutes = newMinutes--

        return newMinutes
    }

    return {
        play, pause, reset, plus, minus, newMinutes
    }
}