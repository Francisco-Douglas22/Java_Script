/*7 - Crie um programa que leia quanto dinheiro uma pessoa tem na carteira e
 mostre quantos dólares ela pode comprar*/


//Criando as variaveis dinheiro e valor dolar
const dinheiro = 3450
const valor_dolar = 4.60

//Total dolares
let total_dolares = dinheiro / valor_dolar

console.log(`Uma pessoa com ${dinheiro}R$ e o dolar a ${valor_dolar} U$`)
console.log(`Essa pessoa podera compra ${total_dolares.toFixed(2)} R$ Dolares`)

