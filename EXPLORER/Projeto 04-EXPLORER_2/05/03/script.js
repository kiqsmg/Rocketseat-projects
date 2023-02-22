const patients = [
    {
        name: "Luiz",
        age: 37,
        weight: 100,
        height: 190,
    },
    {
        name: "Carlos",
        age: 29,
        weight: 78,
        height: 182,
    },
    {
        name: "Beatriz",
        age: 22,
        weight: 71,
        height: 168,
    },
]


function printPatientIMC (patient) {
    alert(`
        Paciete ${patient.name} possui o IMC de 
        ${((patient.weight / ((patient.height / 100)**2))).toFixed(2)}
`)
}


for (let patient of patients) {  //vai nos dar todos os patient dentro de patients
    printPatientIMC(patient) //podemos utilizar o metodo de baixo tambem
    /* let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage) */
}