/*20 - Leia um valor de comprimento em JARDAS e converta para Metros. Depois disso converta novamente para
JARDAS
Formulas: M = 0.91 * J
Formulas: J = M / 0.91
*/

const jardas = 40;

//Convertendo para metros
let jardas_m = 0.91 * jardas;
console.log(`O Total de ${jardas} Jardas equivale a ${jardas_m} Metros`);

//Revertendo a conversão
let metros_j = jardas_m / 0.91;
console.log(`O Toal de ${jardas_m} Metros equivale a ${metros_j} Jardas`);