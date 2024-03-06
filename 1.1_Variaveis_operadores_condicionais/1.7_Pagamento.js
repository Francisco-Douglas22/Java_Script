/* Elabora um algoritmo que calcule o que deve ser pago por um produto

Condições de pagamento
- A Vista Dinheiro/Debito, 10% de desconto
- A Vista no Dinheiro ou Pix, 15% de desconto
- Em duas vezes cartao, preco normal
- Acima de 2 vezes, juros de 10%*/

const nome_produto = 'Noteboo';
const preco_produto = 3456;

console.log('Condições de pagamentoi');
console.log('[1] A Vista Dinheiro/Debito 10% Desconto');
console.log('[2] A Vista Dinheiro ou PIX 15% Desconto');
console.log('[3] Em Duas Vezes Cartao, preco normal');
console.log('[4] Acima de 2 vezes, juros de 10%');

const forma_pagamento = 2;

console.log(`O Produto que custava ${preco_produto.toFixed(2)} R$: `)

if (forma_pagamento === 1){
    const novo_preco = preco_produto * 0.9
    console.log(`Com 10% de desconto passara a custa ${novo_preco.toFixed(2)} R$`)
}else if (forma_pagamento === 2){
    const novo_preco = preco_produto * 0.85
    console.log(`Com 15% de desconto passara a custa ${novo_preco.toFixed(2)} R$`)
}else if (forma_pagamento == 3){
    console.log('Em 2x no cartao Preco normal sem desconto')
}else if (forma_pagamento === 4){
    const novo_preco = preco_produto * 1.1;
    console.log(`Em mais de 2x no cartao, 10% de juros saira por ${novo_preco.toFixed(2)} R$`)

}else{
    console.log('Por favor tente novamente')
}