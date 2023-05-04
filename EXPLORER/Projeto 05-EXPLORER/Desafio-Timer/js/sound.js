

export default function() {
    const buttonPressForest = new Audio("Sounds\Cafeteria.wav")
    const buttonPressRain = new Audio("Sounds\Chuva.wav")
    const buttonPressCoffe = new Audio("Sounds\Cafeteria.wav")
    const buttonPressFirepit = new Audio("Sounds\Lareira.wav")

    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    bgAudio.loop


    function pressButtonForest() {
        buttonPressForest.play()
    }

    function pressButtonRain() {
        buttonPressRain.play()
    }

    function pressButtonCoffe() {
        buttonPressCoffe.play()
    }

    function pressButtonFirepit() {
        buttonPressFirepit.play()
    }


    function timeEnd() {
        kitchenTimer.play()
    }
    return {
        pressButtonForest,
        pressButtonRain,
        pressButtonCoffe,
        pressButtonFirepit,

    }

}