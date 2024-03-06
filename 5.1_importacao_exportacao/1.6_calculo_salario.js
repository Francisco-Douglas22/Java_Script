/*Faça um programa que calcule e imprima o salário salário a ser transferido
para um funcionário. Para realizar o calculo receba o valor bruto do salário e o
adicional dos benefícios. O salário salário a ser transferido é calculado da
seguinte maneira

// valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:

//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%*/

const {calculo_salario, ad_beneficio} = require('./1.5_funcao_salario');

const valor_salario = 1400;
const adicionais = 546;

//Condicionais
console.log(`Voce que recebe ${valor_salario} R$ com o desconto de: `)

if (valor_salario > 0.0 && valor_salario <= 1100){
    let salario = console.log(`5% de desconto: ${calculo_salario(valor_salario, 5)}`);

}else if (valor_salario > 1100 && valor_salario <= 2500){
    let salario = console.log(`10% de desconto: ${calculo_salario(valor_salario, 10)}`);

}else if (valor_salario >= 2500){
    let salario = console.log(`15% de desconto: ${calculo_salario(valor_salario, 15)}`);
}

// Valor a paga com adicional
const valor_transferir = ad_beneficio(salario, adicionais);
console.log(`O Valor a Transferir para o funcionario e de ${valor_transferir.toFixed(2)}`)