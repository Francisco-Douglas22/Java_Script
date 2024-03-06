/* Faça um programa para calcula o valor de uma viagem.

Voce tera 3 variaveis. Sendo elas
1 - Preco media de combustivel
2 - Gasto medio de combustivel do carro por km
3 - Distancia em KM da viagem

Imprima no console o valor que sera gasto para realiza essa viagem*/

// Variaveis

const preco_combustivel = 4.56;
const km_por_litro = 12;
const distancia_km = 200;

// Calculo quanto foi gasto para percorrer 200 km
litros_gastos = distancia_km / km_por_litro;
console.log(`Foram gasto ao todo ${litros_gastos.toFixed(2)} litros de gasolina em ${distancia_km}km`);

// Calculo valor R$ gasto
custo_total = litros_gastos * preco_combustivel;
console.log(`Foram gasto ao todo ${custo_total} R$ na viagem`)