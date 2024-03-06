/*28 - Faça um programa onde o funcionário recebe o salário-base.
Calcule o salário com uma gratificação de 5% sobre o salário e depois
calcule 7% de imposto de renda, mostre o resultado final do salário*/

const salario = 1560
const gratificacao = 5

//Calculo do Salario total
let salario_grat = salario * ((100 + gratificacao) / 100)
console.log(`O Funcionario que ganha ${salario} R$ com a gratificação de 5% ganhou ${salario_grat} R$`)

//Calculo desconto
let salario_desconto = salario_grat * 0.93
console.log(`Com o desconto de 7% o funcionario so recebeu ${salario_desconto.toFixed(2)}`)
