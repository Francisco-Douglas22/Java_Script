/*9 - Faça um algoritmo que leia o nome e o salário de um
funcionário e mostre seu novo salário, com 15% de aumento*/

const salario = 4560
const percentual_aumento = 15

// Calculo do novo salario
let novo_salario = salario * ((100 + percentual_aumento) / 100)

console.log(`O Funcionario que ganhava ${salario} com 15% de Aumento passara a ganha ${novo_salario.toFixed()} R$`)