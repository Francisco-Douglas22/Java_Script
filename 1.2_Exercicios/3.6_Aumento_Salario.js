/*24 - Leia o salário de um funcionário. Calcule o valor do novo
salário, sabendo que ele recebe um aumento de 25%
*/

const salario = 3560;
const aumento = 25; //25% de aumento

//Calculo novo Salario
let novo_salario = salario * ((100 + aumento) / 100)

console.log(`O Funcinario que ganhava ${salario} R$ com 25% de aumento`)
console.log(`Passara a ganha ${novo_salario.toFixed(2)} R$`)