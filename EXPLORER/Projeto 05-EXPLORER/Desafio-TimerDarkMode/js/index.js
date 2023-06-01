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
    secondsDisplay,
    buttonDark,
    buttonLight,
} from "./elements.js"
import Sounds from "./sound.js"


const sound = Sounds()

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



//PLUS MINUS------------------------------------------------------------

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

//PLUS MINUS------------------------------------------------------------







//Dark Mode------------------------------------------------------------
buttonLight.addEventListener('click', function () {
    buttonDark.classList.remove('hide')
    buttonLight.classList.add('hide')
    document.documentElement.style.setProperty('--bg-color', '#323238')
    document.documentElement.style.setProperty('--tm-color', '#FFFFFF')
    document.documentElement.style.setProperty('--icon-color', '#FFFFFF')



    const playSvg = buttonPlay.querySelector('svg');
    const playPathElement = playSvg.querySelector('path');
    playPathElement.setAttribute('fill', '#FFFFFF');


    const stopSvg = buttonStop.querySelector('svg');
    const stopPathElement = stopSvg.querySelector('path');
    stopPathElement.setAttribute('fill', '#FFFFFF');


    const plusSvg = buttonPlus.querySelector('svg');
    const plusPathElement = plusSvg.querySelector('path');
    plusPathElement.setAttribute('fill', '#FFFFFF');


    const minusSvg = buttonMinus.querySelector('svg');
    const minusPathElement = minusSvg.querySelector('path');
    minusPathElement.setAttribute('fill', '#FFFFFF');



})


buttonDark.addEventListener('click', function () {
    buttonDark.classList.add('hide')
    buttonLight.classList.remove('hide')
    document.documentElement.style.setProperty('--bg-color', '#FFFFFF')
    document.documentElement.style.setProperty('--tm-color', '#323238')
    document.documentElement.style.setProperty('--icon-color', '#black')


    const playSvg = buttonPlay.querySelector('svg');
    const playPathElement = playSvg.querySelector('path');
    playPathElement.setAttribute('fill', '#323238');


    const stopSvg = buttonStop.querySelector('svg');
    const stopPathElement = stopSvg.querySelector('path');
    stopPathElement.setAttribute('fill', '#323238');


    const plusSvg = buttonPlus.querySelector('svg');
    const plusPathElement = plusSvg.querySelector('path');
    plusPathElement.setAttribute('fill', '#323238');


    const minusSvg = buttonMinus.querySelector('svg');
    const minusPathElement = minusSvg.querySelector('path');
    minusPathElement.setAttribute('fill', '#323238');
})


//Dark Mode------------------------------------------------------------

