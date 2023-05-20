

export default function () {
    const buttonPressForest = new Audio("./Sounds/Floresta.wav")
    const buttonPressRain = new Audio("./Sounds/Chuva.wav")
    const buttonPressCoffe = new Audio("./Sounds/Cafeteria.wav")
    const buttonPressFirepit = new Audio("./Sounds/Lareira.wav")

    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    buttonPressForest.loop
    buttonPressRain.loop
    buttonPressCoffe.loop
    buttonPressFirepit.loop


    function timeEnd() {
        kitchenTimer.play()
    }

    return {
        buttonPressForest,
        buttonPressCoffe,
        buttonPressFirepit,
        buttonPressRain,
        timeEnd

    }

}