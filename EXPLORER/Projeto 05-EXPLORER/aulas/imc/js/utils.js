//Utilitary functions, that serve as utility to other scripts


export function notANumber(value) {
    return isNaN(value) || value == ""
}

export function calculateIMC(weight, height) {
    return (weight / ((height / 100)** 2)).toFixed(2)
}