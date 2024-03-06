/* Elabora um algoritmo que calcule o que deve
 ser pago por um produto

Condições de pagamentoi
- A Vista Dinheiro/Debito, 10% de desconto
- A Vista no Dinheiro ou Pix, 15% de desconto
- Em duas vezes cartao, preco normal
- Acima de 2 vezes, juros de 10%*/

console.log('Condições de pagamentoi');
console.log('[1] A Vista Dinheiro/Debito 10% Desconto');
console.log('[2] A Vista Dinheiro ou PIX 15% Desconto');
console.log('[3] Em Duas Vezes Cartao, preco normal');
console.log('[4] Acima de 2 vezes, juros de 10%');

console.log('')

// Variavel preco
const preco_produto = 2500;

//Criando a função
function aplica_desconto(valor, desconto){
    return valor * ((100 - desconto) / 100);
}

//Funcao que calcula juros
function aplica_juros(valor, juros){
    return valor * ((100 + juros) / 100);

}

// Gerando a forma de pagamento aleatoria
function gerando_numero(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// Forma de pagamento
const forma_pagamento = gerando_numero(1, 5);
console.log(`Forma de pagamento escolhida foi: ${forma_pagamento}`);
console.log(`O Produto que custava ${preco_produto.toFixed(2)} passara a custa.`)

//Criando a condição
if (forma_pagamento === 1){
    console.log(aplica_desconto(preco_produto, 10));

}else if (forma_pagamento === 2){
    console.log(aplica_desconto(preco_produto, 15));

}else if (forma_pagamento === 3){
    console.log('Preco normal Sem desconto.');

}else if (forma_pagamento === 4){
    console.log(aplica_juros(preco_produto, 10));

}else {
    console.log('Por favor tente novamente')
}