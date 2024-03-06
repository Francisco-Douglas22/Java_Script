/*36 - Três amigos jogaram na loteria. Caso eles ganhem, o prêmio dever ser repartido proporcionalmente ao
valor que cada um deu para a aposta. Faça um programa que leia quanto cada apostador investiu, o valor
do prêmio, e imprima quanto cada um ganharia com base no valor investido
 */

const valor_aposta = 120;
const jogador_1 = 50;
const jogador_2 = 45;
const jogador_3 = 25;

//Valor do Premio
const premio = 550000;

//Percentual de Cada Jogador
let percentual_1 = (jogador_1 / valor_aposta) * 100;
let percentual_2 = (jogador_2 / valor_aposta) * 100;
let percentual_3 = (jogador_3 / valor_aposta) * 100;

//Calculo do Premio
let valor1 = premio * (percentual_1 / 100);
let valor2 = premio * (percentual_2 / 100);
let valor3 = premio * (percentual_3 / 100);

//Percentual que cada Ganhara do Premio
console.log(`O Jogador Numero1 ficara com ${percentual_1.toFixed(2)}% do premio totalizando ${valor1.toFixed(2)}R$`)
console.log(`O Jogador Numero2 ficara com ${percentual_2.toFixed(2)}% do premio totalizando ${valor2.toFixed(2)}R$`)
console.log(`O Jogador Numero3 ficara com ${percentual_3.toFixed(2)}% do premio totalizando ${valor3.toFixed(2)}R$`)
