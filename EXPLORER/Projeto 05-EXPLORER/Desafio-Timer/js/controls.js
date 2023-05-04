export default function controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonMinus,
}) {
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
}