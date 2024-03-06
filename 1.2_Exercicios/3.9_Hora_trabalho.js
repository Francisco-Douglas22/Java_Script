/*27 - Faça um programa que leia o valor da hora de trabalho em R$ e numero de horas trabalhadas no mês.
Sabendo que o trabalhador, trabalha 6 horas por dia e 4 dias e meio por semana. Imprima o valor a ser
pago ao funcionário, adicionando 10% sobre o valor calculado. */

const valor_hora = 56;

//Calculo dias trabalhados
let dias_mes = 4.5 * 4;
let horas_trabalhadas = dias_mes * 6;

//Calculo final com 10% de aumento
let calculo_final = horas_trabalhadas * valor_hora;

console.log(`O Trabalhador que trabalhou ${horas_trabalhadas} horas no mes ganhara ${calculo_final.toFixed(2)} R$`)