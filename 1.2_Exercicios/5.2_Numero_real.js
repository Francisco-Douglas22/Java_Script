/*38 - Crie um programa que leia um número Real qualquer
pelo teclado e mostre na tela a sua porção Inteira
 */

const numero_real = 456.756;

//Porção inteira
let numero_inteiro = parseInt(numero_real)
console.log(`O Numero e ${numero_real} sua porção inteira e ${numero_inteiro}`)

//Outra Forma
console.log(`O Numero e ${numero_real} sua porção inteira e ${numero_real.toFixed(0)}`)