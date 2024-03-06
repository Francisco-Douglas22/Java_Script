/*23 - Faça um programa que leia o valor de um produto e imprima o valor com desconto,
tendo em vista que desconto foi de 12%
 */

const valor_produto = 2450;

const desconto  = 12; //12%

//Calculo do novo valor do produto
novo_valor = valor_produto * ((100 - 12) / 100);

console.log(`Um produto de ${valor_produto} R$ com desconto de 12%`)
console.log(`Seu novo preço passara a ser de ${novo_valor.toFixed(2)} R$`)

