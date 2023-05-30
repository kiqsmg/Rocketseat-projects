import Controls from "./controls.js"
import Timer from "./timer.js"
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonMinus,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffe,
    buttonSoundFirepit,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"
import Sounds from "./sound.js"


const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

const sound = Sounds()

buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countdown()
})

buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    /* sound.pressButtonRain() */

})

buttonStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
})
//PLUS MINUS------------------------------------------------------------

buttonPlus.addEventListener('click', function () {
    controls.plus()
})

//PLUS MINUS------------------------------------------------------------


buttonSoundForest.addEventListener('click', function () {
    if (sound.bgForest.paused) {
        sound.bgForest.play()
    } else {
        sound.bgForest.pause()
    }
})

buttonSoundRain.addEventListener('click', function () {
    if (sound.bgRain.paused) {
        sound.bgRain.play()
    } else {
        sound.bgRain.pause()
    }
})

buttonSoundFirepit.addEventListener('click', function () {
    if (sound.bgFirepit.paused) {
        sound.bgFirepit.play()
    } else {
        sound.bgFirepit.pause()
    }
})

buttonSoundCoffe.addEventListener('click', function () {
    if (sound.bgCoffe.paused) {
        sound.bgCoffe.play()
    } else {
        sound.bgCoffe.pause()
    }
})


buttonPlus.addEventListener('click', function () {
    let newMinutes = controls.plus()

    if (!newMinutes) {
        timer.reset()
        return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})


buttonMinus.addEventListener('click', function () {
    let newMinutes = controls.minus()

    if (!newMinutes) {
        timer.reset()
        return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})




