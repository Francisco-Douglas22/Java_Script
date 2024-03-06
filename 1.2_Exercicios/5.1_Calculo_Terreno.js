/*37 - Faça um programa para ler as dimensões de um terreno (comprimento x largura)
bem como o preço do metro de arame. Imprima o custo para cerca esse terreno todo */

const largura = 45;
const comprimento = 50;

//Calculo metros quadrados
let metros_q = largura * comprimento;
console.log(`Um terreno de ${largura} x ${comprimento} tem uma dimensão de ${metros_q.toFixed(2)} Metros Quadrados`);

//Calculo Total arame
const preco_arame = 4.5;
let total_custo = metros_q * preco_arame;

console.log(`O Custo de arame para serca o terreno sera de ${total_custo.toFixed(2)} R$`)