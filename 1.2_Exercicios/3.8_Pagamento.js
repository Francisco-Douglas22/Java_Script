/*Uma empresa contrata um encanador a R$ 30,00 por dia. Faça um programa que solicite
o numero de dias trabalhados pelo encanador e imprima a quan􀆟a liquida que devera ser paga,
sabendo-se que são descontados 8% para impostos de renda
 */

const dias_trabalhados = 22;

//Ganhos totais
let ganhos_totais = dias_trabalhados * 30;

//Calculo final descontando impostos
let ganho_final = ganhos_totais * 0.92;

console.log(`Durante ${dias_trabalhados} o encanador ganhou ${ganhos_totais} R$`)
console.log(`Descontando os 8% de imposto o encanador ganhou ${ganho_final}`)