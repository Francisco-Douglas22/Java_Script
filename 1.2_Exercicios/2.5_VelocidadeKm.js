/*14 - Programa que ler a velocidade em KM/H (quilômetros por hora) e M/S (Metros por segundo).
Converta KM/H em M/S e M/S em KM/H.
Formulas: M = K / 3.6
Formulas: K = M * 3.6
 */

const velocidade_km = 120
const metros_segundo = 10

//Converte Velocidade_km em Metros segundo
let velocidade_segundos = velocidade_km / 3.6

//Converter Metros segundo em KM/H
let velocidade_metros = metros_segundo * 3.6

console.log(`A Velocidade de ${velocidade_km} KM/H equivale a ${velocidade_segundos.toFixed(2)} Metros por segundo`)
console.log(`A Velocidade de ${metros_segundo} Metros por segundo e equivalente a ${velocidade_metros} Km/h`)