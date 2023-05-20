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

buttonSoundForest.addEventListener('click', function () {
    if (sound.buttonPressForest.paused || sound.buttonSoundCoffe) {
        sound.buttonPressForest.play()
    }
    if (sound.buttonPressForest.play) {
        sound.buttonPressForest.pause()
    }
})

buttonSoundRain.addEventListener('click', function () {
    if (sound.buttonPressRain.paused || sound.buttonSoundCoffe) {
        sound.buttonPressRain.play()
    }
    if (sound.buttonPressRain.play) {
        sound.buttonPressRain.pause()
    }
})

buttonSoundFirepit.addEventListener('click', function () {
    if (sound.buttonPressFirepit.paused || sound.buttonSoundCoffe) {
        sound.buttonPressFirepit.play()
    }
    if (sound.buttonPressFirepit.play) {
        sound.buttonPressFirepit.pause()
    }
})

buttonSoundCoffe.addEventListener('click', function () {

    if (sound.buttonPressCoffe.paused || sound.buttonSoundCoffe) {
        sound.buttonPressCoffe.play()
    }
    if (sound.buttonPressCoffe.play) {
        sound.buttonPressCoffe.pause()
    }
})


buttonSoundForest.addEventListener('click', function () {
    let newMinutes = 0

    if (!newMinutes) {
        timer.reset()
        return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})





