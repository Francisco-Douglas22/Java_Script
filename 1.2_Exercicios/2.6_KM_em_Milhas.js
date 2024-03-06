/*15 - Leia 2 Distancia, Milha e Km quilômetros, transforme as Milhas em Km e Quilometro em Milhas.
Formulas: K = 1.61 * M
Formulas: M = K / 1.61 */

const km = 200
const milhas = 200

//Conversão km em milhas
let km_milhas = km / 1.61

//Conversão Milhas em KM
let milhas_km = milhas * 1.61

console.log(`A Distancia de ${km} KM equivale a ${km_milhas.toFixed(2)} Milhas`)
console.log(`A Distancia de ${milhas} Milhas e equivalente a ${milhas_km} Km`)