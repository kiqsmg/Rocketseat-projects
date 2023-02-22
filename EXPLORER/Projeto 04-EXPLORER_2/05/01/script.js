//



//Olá usuário! Digite o número da opção desejada
//1. Cadastrar um item na lista
//2. Mostrar itens cadastrados
//3. Sair do programa

//Se não houver nenhum item cadastrado, mostrar a mensagem: Não existem itens cadastrados.

// Dados de entrada do usuario:
// Número desejado
// Item da lista

let option
let items = [] //vai ser um array (uma lista, uma coleção,...)
let index = 0;

while(option != 3) {

    option = Number(prompt(`
        Olá usuário! Digite o número da opção desejada:
        1. Cadastrar um item na lista
        2. Mostrar itens cadastrados
        3. Sair do programa`))

    
    switch(option) {
        case 1:
            items[index] = prompt("Digite o nme do item:")
            index++ //sempre somando mais um para ir aumentando a posição 
            //poderia mudar as duas linhas acima utilizando let item na primeira e items.psh(item) na segunda, que iria ir dando push nos objetos para dentro do array ja criado
            break;

        case 2:
    
        if (items.length == 0) {
            alert("Não existem items cadastrados.")
        } else {
        alert(items)
        }
        break;

        case 3:
            alert("Goodbye")
        break;

        default:
            alert("Opção ivalida. Tente novamente")
    }
    console.log(option, items)
}