/*34 - Leia um valor inteiro em Segundos e imprima em Horas e Minutos */

const segundos = 1600;

//Conversao
let minutos = segundos / 60;
let horas = minutos / 60;

console.log(`O Tempo de ${segundos} Segundos e equivalente a`)

if (horas > 1){
    console.log(`${minutos.toFixed(0)} Minutos ou mesmo ${horas.toFixed(2)} Horas`)
}else{
    console.log(`${minutos.toFixed(0)} Minutos `)
}