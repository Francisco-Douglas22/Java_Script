/*Faça um programa que leia um ângulo qualquer e mostre na tela
o valor do seno, cosseno e tangente desse ângulo.
 */
const angulo = 45;

//Converte o Angulo para radianos
const radiano = angulo * Math.PI / 180;
console.log(`O Angulo de ${angulo} tem um Radiano de ${radiano.toFixed(2)}`)

//Seno Consseno tangente
let seno = Math.sin(radiano);
let cosseno = Math.cos(radiano);
let tangente = Math.tan(radiano);

console.log(`O Angulo de ${angulo} tem: `)
console.log(`Seno de ${seno.toFixed(2)}, Cosseno de ${cosseno.toFixed(2)} Tangente de ${tangente.toFixed(2)}`)

