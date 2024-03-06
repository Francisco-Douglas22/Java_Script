/*13 - Programa que receba 2 inputs, um Para transforma Graus Kelvin em
Graus Celsius e o outro Para Transforma Graus Celsius em Graus Kelvin
Formulas: C = K – 273.15
Formulas: K = C + 273.15*/

const g_kelvin = 35
const g_celsius = 45


//Transformando
let kelvin_c = g_kelvin - 273.15
let celsius_k = g_celsius + 273.14

console.log(`A temperatura de ${g_kelvin} Graus Kelvin equivale a ${kelvin_c.toFixed(2)} Graus Celsius`)
console.log(`A temperatura de ${g_celsius} Graus Celsius equivale a ${celsius_k.toFixed(2)} Graus Kelvin`)