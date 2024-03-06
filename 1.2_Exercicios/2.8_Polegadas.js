/*17 - Leia 2 comprimento, Polegadas e Centimetros, transforme primeiro
Polegadas em Cen􀆡metros e depois transforme Cen􀆡metros em Polegadas.
Formulas: C = P * 2.54
Formulas: P = C / 2.54 */

const polegadas = 25
const centimetros = 25

//Convertendo polegadas em CM
let p_cent = polegadas * 2.54

//Convertendo centimetros em Polegadas
let c_pol = centimetros / 2.54

console.log(`${polegadas} e o mesmo valor de ${p_cent.toFixed(2)} Centimetros`)
console.log(`${centimetros} e o mesmo valor de ${c_pol.toFixed(2)} Polegadas`)