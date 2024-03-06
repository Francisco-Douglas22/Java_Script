/*39 - Faça um programa que leia o comprimento do cateto oposto e do cateto
adjacente de um triângulo retângulo. Calcule e mostre o comprimento da hipotenusa
 */

const cateto_adjacente = 45;
const cateto_oposto = 32;

//Utilizando Biblioteca para calculo da Hipotenuza
let hipotenuza = Math.hypot(cateto_oposto, cateto_adjacente)

console.log(`O Cateto Oposto de ${cateto_oposto} e Cateto Adjacente de ${cateto_adjacente}`)
console.log(`Forman uma Hipotenuza de ${hipotenuza.toFixed(2)}`)

