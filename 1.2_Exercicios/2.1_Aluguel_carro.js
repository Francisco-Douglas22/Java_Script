/*10 - Escreva um programa que pergunte a quan􀆟dade de Km percorridos por um carro alugado e a quan􀆟dade
de dias pelos quais ele foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$60 por dia e
R$0,15 por Km rodado */

const ktd_km_percorrido = 345
const dias_alugados = 5

//Calculo do gasto total
let custo_aluguel = (ktd_km_percorrido * 0.15) + (dias_alugados * 60)

console.log(`Um Carro que percorreu ${ktd_km_percorrido} km em ${dias_alugados} dias.`)
console.log(`Essa Carro tera um custo de Aluguel de ${custo_aluguel.toFixed(2)} R$`)