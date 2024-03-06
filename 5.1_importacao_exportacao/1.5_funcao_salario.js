/*Faça um programa que calcule e imprima o salário salário a ser transferido
para um funcionário. Para realizar o calculo receba o valor bruto do salário e o
adicional dos benefícios. O salário salário a ser transferido é calculado da
seguinte maneira

// valor bruto do salário - percentual de imposto
mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:

//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%*/

// Criando a função

function calculo_salario(valor_bruto, p_imposto){
    return salario = valor_bruto * ((100 -p_imposto) / 100);
}

function ad_beneficio(calculo_salario, beneficios){
    return adicional = calculo_salario + beneficios;
}

module.exports = {calculo_salario, ad_beneficio};