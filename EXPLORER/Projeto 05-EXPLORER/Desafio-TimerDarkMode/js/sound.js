

export default function () {
    const bgForest = new Audio("./Sounds/Floresta.wav")
    const bgRain = new Audio("./Sounds/Chuva.wav")
    const bgCoffe = new Audio("./Sounds/Cafeteria.wav")
    const bgFirepit = new Audio("./Sounds/Lareira.wav")

    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    bgForest.loop
    bgRain.loop
    bgCoffe.loop
    bgFirepit.loop


    function timeEnd() {
        kitchenTimer.play()
    }

    return {
        timeEnd,
        bgForest,
        bgCoffe,
        bgFirepit,
        bgRain,

    }

}