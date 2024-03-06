/*22 - Sejam a e b os catetos de um triangulo, onde a Hipotenusa e obtida pela equação
Hipotenusa = Raiz Quadrada de 𝒂𝟐 + 𝒃𝟐. Faça um programa que receba os valores de a e b
e calcule o valor da Hipotenusa através da equação. */

//Variaveis
const valor_a = 45;
const valor_b = 35;

//Calculo da Hipotenuza
let hipotenuza = ((valor_a ** 2) + (valor_b ** 2) ** 0.5);

console.log(`Os Catetos ${valor_a} e ${valor_b}`)
console.log(`Forman uma Hipotenuza de ${hipotenuza}`)