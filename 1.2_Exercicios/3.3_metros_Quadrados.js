/*21 - Leia um valor em Metros Quadrados M² e converta o para ACRES e HECTARES, depois inverta a conversão
para Metros Quadrados Novamente
Formulas: A = M * 0.000247 Metros² em ACRES
Formulas: M = A * 4048.58 ACRES em Metros²
Formulas: H = M * 0.0001 Metros em Hectares
Formulas: M = H * 1000 Hectares em Metros
*/

const metros_quadrados = 2500;

//Convertendo para ACRES
let metros_acres = metros_quadrados * 0.000247;
console.log(`O Valor de ${metros_quadrados} Metros² equivale a ${metros_acres.toFixed(4)} Acres`)

//Convertendo Hectares
let metros_hectares = metros_quadrados * 0.0001;
console.log(`O Valor de ${metros_quadrados} Metros² equivale a ${metros_hectares.toFixed(4)} Hectares`)

//Revertendo as conversoes
let acres_metros = metros_acres * 4048.58
let hectares_metros = metros_hectares * 10000

console.log(acres_metros)
console.log(hectares_metros)