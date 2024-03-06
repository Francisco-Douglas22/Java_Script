/*29 - Escreva um programa de ajuda para vendedores. A par􀆟r de um valor total lido, mostre
 O Total a pagar com 10% de desconto
 O Valor de cada parcela, no parcelamento de 3x sem juros
 A comissão do vendedor de %5 no caso de venda à vista
 */

const valor = 1200;

let desconto_10 = valor * 0.9
console.log(`Total com 10% de desconto ${desconto_10} R$`)

let parcelado = valor / 3
console.log(`Parcelado em 3x ficara ${parcelado} R$`)

let comisao = valor * 0.05
console.log(`A Comissao do vendedor sera de ${comisao} R$`)