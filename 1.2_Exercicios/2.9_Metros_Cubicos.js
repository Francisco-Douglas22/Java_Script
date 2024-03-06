/*18 - Leia 3 valores de Metros Cúbicos M³ e apresente em Litros,
 depois some esses valores e apresente o resultado em Metros Cúbicos M³.
Formulas: L = 1000 * M
Formulas: M = L / 1000

*/

const m_cubico1 = 1;
const m_cubico2 = 2;
const m_cubico3 = 3;

//Conversão para litros
litros1 = m_cubico1 * 1000;
litros2 = m_cubico2 * 1000;
litros3 = m_cubico3 * 1000;

console.log(`${m_cubico1} M³ equivale a ${litros1} Litros`)
console.log(`${m_cubico2} M³ equivale a ${litros2} Litros`)
console.log(`${m_cubico3} M³ equivale a ${litros3} Litros`)

//Soma dos valores em Litros
let soma_litros = litros1 + litros2 + litros3
console.log(`A Soma dos litros e ${soma_litros}`)

//Transformando a Soma dos litros para M³
let metros_cubico = soma_litros / 1000

console.log(`O Total de ${soma_litros} Litros de agua equivale a ${metros_cubico} M³`)