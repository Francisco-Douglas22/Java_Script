/*32 - Faça um programa que leia um numero inteiro posi􀆟vo de três dígitos (de 100 a 999)
Gere um outro número formado de dígitos invertidos do número: Exemplo 123 = 321
*/

const numero = 465;

//Transformando o Numero em String
let S_numero = numero.toString();
let invertido = S_numero.split('').reverse().join('');
console.log(invertido)