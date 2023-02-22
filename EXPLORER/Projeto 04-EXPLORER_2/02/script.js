let student = prompt('Ensira o nome do aluno aqui:')
let nota01 = prompt('Ensira a nota 01 aqui:')
let nota02 = prompt('Ensira a nota 02 aqui:')
let nota03 = prompt('Ensira a nota 03 aqui:')

final = (Number(nota01) + Number(nota02) + Number(nota03))/3


if (final > 6) {
    alert('Parabéns, você está aprovado!')
} else if (final < 3) {
    alert('O aluno está reprovado.')
} else {
    alert('Estude para a recuperação que será na proxima semana, oa sorte!')
}
