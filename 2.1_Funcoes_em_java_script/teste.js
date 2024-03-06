// Recebe o valor bruto do salário e o adicional dos benefícios
var salario_bruto = parseFloat(prompt("Digite o valor bruto do salário: "));
var beneficios = parseFloat(prompt("Digite o valor do adicional dos benefícios: "));

// Calcula o percentual de imposto de acordo com a faixa salarial
var imposto;
if (salario_bruto <= 1100) {
    imposto = 0.05; // 5%
} else if (salario_bruto <= 2500) {
    imposto = 0.1; // 10%
} else {
    imposto = 0.15; // 15%
}

// Calcula o salário a ser transferido
var salario_transferido = salario_bruto - (salario_bruto * imposto) + beneficios;

// Imprime o salário a ser transferido
console.log("O salário a ser transferido é: R$ " + salario_transferido.toFixed(2));