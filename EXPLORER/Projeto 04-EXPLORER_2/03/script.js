
let items = []; // o array precisa obrigatoriamente começar da psição zero

for (let item = 0; item < 10; item++) {
    let itemName = prompt("Digite o item " + (item + 1) )

    items[item] =itemName    
}

alert(items)