/*8 - Faça um programa que leia a largura e a altura de uma parede em metros, calcule a sua área e a quantidade
de 􀆟nta necessária para pintá-la, sabendo que cada litro de 􀆟nta pinta uma área de 2 metros quadrados */

const altura = 4.5
const largura = 8.5

//Calculo do total de litros de tinta
let metros_quadrado = altura * largura
let litros_tinta = metros_quadrado / 2

console.log(`Uma parede de ${metros_quadrado.toFixed(2)} M² levara ${litros_tinta.toFixed(2)} litros de tinta para ser pintada`)

