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

let patientsNames = []

for(let patient of patients) {
    patientsNames.push(patient.name)
}
alert(patientsNames) //puxando informações de dentro do array


alert("Temos um total de: " + patients.length + " pacientes registrados.")
alert("Paciente número 1... nome:" + patients[0].name + "   idade:" + patients[0].age + "   peso:" + patients[0].weight + "   altura:" + patients[0].height)