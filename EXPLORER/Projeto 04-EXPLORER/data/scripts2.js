//Manipulando Arrays



let techs = ["html", "css", "js"]

//adicionar um item no fim
console.log(techs.push("nodejs"))

//adicionar no começo
techs.unshift("sql")

//remover item do final
techs.pop()

//remover do começo
techs.shift()

//pegar somente alguns elementos do array  
//usamos console.log pq não modificamos o array, só pegamos um argumento dele
console.log(techs.slice(1, 3))    // retirar elementos de 1 ao 3, logo falamos do elemento 2

//remover 1 ou mais items em qualquer posição do array
techs.splice(1, 2)  //pra tirar o "css" e o "js", digitamos o index dele (lembrando que começa do 0)

//encontrar a posição de um elemento no array
let index = techs.indexOf('sql')



console.log(techs)