/*12 - Programa que leia uma Temperatura em Graus Celsius e Apresente-a convertida em Graus
Fahrenheit. Depois faça o inverso do programa transformando Fahrenheit em Celsius
Formulas: F = celsius * (9.0/5.0) + 32
Formulas: C = (F – 32) * 5 / 9
 */

//Temperaturas
const graus_c = 45
const graus_f = 67

//Convertendo Graus Celsius em F
let celsius_f = graus_c * (9 / 5) + 32
console.log(`A Conversão de ${graus_c} para Graus Fharenheit e ${celsius_f}`)

//Convertendo Graus Fahrenheit para Graus Celsius
let fahre_c = (graus_f - 32) * 5/9
console.log(`A Conversão de ${graus_f} para Graus Celsius e ${fahre_c.toFixed(2)}`)
