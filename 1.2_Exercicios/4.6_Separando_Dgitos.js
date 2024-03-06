/*33 - Leia um numero inteiro de 4 dígitos (de 1000 a 9999) e imprima cada digito separado por linha */

const numero = 3456;

//Transformando em string para melhora
let num = numero.toString();

//Loop para pega cada numero
for (let i = 0; i < num.length; i++){
    console.log(num[i])
}