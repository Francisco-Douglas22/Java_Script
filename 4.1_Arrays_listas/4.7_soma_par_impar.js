const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`A lista de numeros e ${numeros}`)

const par = [];
const impar = [];

let soma_par = 0
let soma_impar = 0 //Deve ser let pois o numero tem que muda sempre

//Criando o loop
for (let n = 0; n < numeros.length; n++){
    if (numeros[n] % 2 === 0){
        par.push(numeros[n])
        soma_par += numeros[n]

    }else{
        impar.push(numeros[n])
        soma_impar += numeros[n]
    }
}


console.log(`Os Numeros pares são: ${par} e a soma e ${soma_par}`)
console.log(`Os Numeros impar são: ${impar} e a soma e ${soma_impar}`)

