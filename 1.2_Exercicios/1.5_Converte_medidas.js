/*5 - Escreva um programa que leia um valor em metros e o exiba converƟdo em (Quilometro, Hectômetro,
Decâmetro, Decímetro, Cenơmetro, Milímetro) sendo que
Km = 1000 /
Hec = 100 /
Deca = 10 /
Deci = 10 *
Cent = 100 *
Mili = 1000 *
*/

const metros =  120;

//Converter os dados
let km   = 1000 / metros;
let hec  = 100 / metros;
let deca = 10 / metros;
let deci = 10 * metros;
let cent = 100 * metros;
let mili = 1000 * metros;

//Impressao dos resultados
console.log(`O Comprimento de ${metros} Metros e equivalente a:`);
console.log(`${km.toFixed(4)} Quilometros Km`);
console.log(`${hec.toFixed(4)} Hectometros`);
console.log(`${deca.toFixed(2)} Decametros`);
console.log(`${deci.toFixed(4)} Decimetros`);
console.log(`${cent.toFixed(4)} Centimetros`);
console.log(`${mili.toFixed(4)} Milimetro`)