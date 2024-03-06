/*Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.*/

const {print, maior_menor} = require('./1.1_funcoes_auxiliares');

const numeros = maior_menor();

let maior_par = null;
let menor_impar = null;

for (let p = 0; p < numeros; p++){
    const numero = maior_menor();

    if (numero % 2 === 0){
        if (numero > maior_par){
            maior_par = numero;
        }

    }else{
        if (menor_impar < numero){
            menor_impar = numero;
        }
    }
}

print(`O Maior numero Par e ${maior_par}`)
print(`O Menor numero IMPAR e ${menor_impar}`)