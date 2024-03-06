// Imputando informação

let rlSync = require('readline-sync');

let nome = rlSync.question('Qual o seu nome: \n')
console.log(`Seu nome e: ${nome}`)

let idade = rlSync.question('Qual sua idade: \n')
console.log(`Sua idade e ${idade}`)

// para utiliza o NodeJs digite node 2_script.js no Terminal