/*2 - Faça um programa que leia algo pelo teclado e mostre na tela o seu tipo
primitivo e todas as informações possíveis sobre ele.*/


var algo = 'Meu nome e Francisco';

// Valor
console.log('Voce digitou: ' + algo)

//Tipo primitivo do valor
console.log(`O Tipo primitivo e ${typeof algo}`)

//Mostra se o valor e numerico
console.log(`E um valor numerico? ${Number.isInteger(algo)}`)

