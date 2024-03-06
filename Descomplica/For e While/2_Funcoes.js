const shoping_cart = [];

function add_item(item){
    shoping_cart.push(item)
}

function removeItem(item){
    const index = shoping_cart.indexOf(item);
    if (index !== -1){
        shoping_cart.splice(index, 1)
    }
}

function visualiza_cart(){
    if(shoping_cart.length == 0){
        console.log("Não temos nenhum produto no Carrinho")
    }else{
        console.log("Items no Carrinho")
        for(let i = 0; i < shoping_cart.length; i++){
            console.log(`Produto ${i + 1}: ${JSON.stringify(shoping_cart[i])}`);

        }
    }
}

function clearCart(){
    shoping_cart.length = 0;
    console.log("Carrinho Zerado com Sucesso")
}

add_item('Tenis')
add_item('Sapato')
add_item('Chinelo')

visualiza_cart()