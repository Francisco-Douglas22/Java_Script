/*11 - Programa que leia 4 números, 2 Inteiros e 2 Flutuantes, faça a soma dos Inteiros e a mul􀆟plicação dos
Flutuantes, depois faça a mul􀆟plicação dos Flutuantes ao quadrado e a Raiz quadrada dos inteiros.
Some o Resultado final dos Números e Divida por 3
*/

const num1 = 3
const num2 = 6
const num3 = 4.56
const num4 = 8.32

//Soma inteiros
let soma_int = num1 + num2
console.log(`A Soma de ${num1} + ${num2} = ${soma_int}`)

console.log("")

//Multiplicacao Float
let mult_float = num3 * num4
console.log(`A Multiplicação de ${num3} x ${num4} = ${mult_float.toFixed(2)}`)

console.log("")

// Multiplicacao Floats ao Quadrado
let mult_quadrado = mult_float * 2
console.log(`A Multiplicacao ao quadrado de ${mult_float} = ${mult_quadrado}`)

console.log("")

//Raiz quadrada dos inteiros
let raiz_quadrada = soma_int * (1/2)
console.log(`A Raiz de ${soma_int} = ${raiz_quadrada}`)

console.log("")

//Soma Resultado Final
let soma = raiz_quadrada + mult_quadrado
console.log(`A Soma final e ${soma.toFixed(2)}`)