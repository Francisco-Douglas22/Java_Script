/*19 - Leia um valor de massa em Kg Quilogramas e converta para Libras, depois disso converta novamente para
kg.
Formulas: L = k / 0.45
Formulas: k = L * 0.45
*/

const massa_kg = 5;

//Convertendo para libras
let massa_libras = massa_kg / 0.45;
console.log(`O Valor de ${massa_kg} Kg equivale a ${massa_libras.toFixed(2)} Libras`)


//Revertendo a conversão
let libras_massa = massa_libras * 0.45;
console.log(`O Valor de ${massa_libras.toFixed(2)} Libras equivale a ${libras_massa.toFixed(2)} Kg`)
